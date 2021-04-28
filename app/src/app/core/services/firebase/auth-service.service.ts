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

  get currentUserId(): string {
    return this.authState !== null
      ? this.authState.uid
      : "";
  }

  get currentUserEmail(): string {
    return this.authState !== null
      ? this.authState.email
      : "";
  }

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

  isVerified(){

    if(this.authState != null){
    return this.authState.emailVerified;
    }
  }

  anonymousLogin() {
    return this.afAuth.signInAnonymously().then((user) => {
      
      this.authState = user;
      
      
    }).catch((error) => console.log(error));
  }

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
  signOut() {
    return this.afAuth.signOut().then(() => {});
  }

  ngOnDestroy() {
    this.sub.authState.unsubscribe();
  }
}
