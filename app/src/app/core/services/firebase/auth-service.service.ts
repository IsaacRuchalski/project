import {Injectable, NgZone} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
@Injectable({providedIn: "root"})
export class AuthServiceService {
  authState: any = null;
  sub: any = null;
  constructor(private afAuth : AngularFireAuth, private router : Router) {
    this.sub = this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
      
    });
    
  }

  /**
   * Vérifie si l'utilisateur est connecté en anonyme
   */
  get isUserAnonymousLoggedIn() {
    var val: boolean;
    if (this.authState !== null) {
      if (this.authState.isAnonymous) 
        val = true;
      else 
        val = false;
      }
    return val;
  }

  /**
   * Get l'ID de l'utilisateur actuel
   */
  get currentUserId(): string {
    return this.authState !== null
      ? this.authState.uid
      : "";
  }
  /**
  * Va récupérer l'email
  * @returns l'email, ou ""
  */
  get currentUserEmail(): string {
    return this.authState !== null
      ? this.authState.email
      : "";
  }

  /**
   * Vérifie si l'utilisateur est connecté et que son email a été vérifiée.
   * @returns un booléen , vrai si connecté, faux sinon
   */
  isLoggedIn() {
    var val: boolean;
    
    if(this.authState != null){
      
    if (this.currentUserEmail === "" && this.authState.emailVerified) {
      val = false;
    } else {
      val = true;
    }
  }

  return val;
  }
  /**
   * sert à vérifier si l'utilisateur a vérifié ses mails
   * @returns Un booléen qui check la vérification d'email
   */
  isVerified(){

    if(this.authState != null){
    return this.authState.emailVerified;
    }
  }
  /**
   * Permet à l'utilisateur de se connecter en anonyme ur Firebase
   * @returns Une Promise 
   */
  anonymousLogin() {
    return this.afAuth.signInAnonymously().then((user) => {
      
      this.authState = user;
      
      
    }).catch((error) => console.log(error));
  }

  /**
   * Permet de se connecter avec mail et mot de passe, après que l'email a été vérifiée.
   * @param mail l'adresse mail
   * @param password le mot de passe
   * @returns une Promise
   */
  login(mail, password) {
    return this.afAuth.signInWithEmailAndPassword(mail, password).then((user) => {
      
      if(!user.user.isAnonymous && user.user.emailVerified !== true) {

        window.alert("Un mail de vérification vous a été envoyé ! Veuillez vérifier vos mails pour accéder à votre compte.")

      }
      else {
      this.authState = user;

    }
    }).catch((error) => console.log(error));
  }
  /**
   * Permet de créer un utilisateur sur Firebase et d'envoyer un mail de vérification
   * @param mail l'email
   * @param password  le mot de passe
   * @returns une promise
   */
  signUp(mail, password) {
    return this.afAuth.createUserWithEmailAndPassword(mail, password).then((user) => {

      if(user.user.emailVerified === false){
      user.user.sendEmailVerification();
      window.alert("Un mail de vérification vous a été envoyé ! Veuillez vérifier vos mails pour accéder à votre compte.")
      this.authState = null;
      }
      else {

        this.authState = user;

      }
    }).catch((error) => console.log(error));


  }

  /**
   * Déconnecté l'utilisateur de Firebase
   * @returns Une promise
   */
  signOut() {
    return this.afAuth.signOut().then(() => {});
  }

  /**
   * Unsubscribe à l'authentification Firebase
   */
  ngOnDestroy() {
    this.sub.authState.unsubscribe();
  }
}
