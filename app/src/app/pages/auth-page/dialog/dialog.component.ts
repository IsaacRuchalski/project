import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthServiceService} from "src/app/core/services/firebase/auth-service.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
@Component({selector: "app-dialog", templateUrl: "./dialog.component.html", styleUrls: ["./dialog.component.scss"]})
export class DialogComponent implements OnInit {
  public authForm !: FormGroup;
  public pwd;
  public mail;
  constructor(public authService : AuthServiceService, private router : Router) {}

  ngOnInit(): void {}
/**
 * Signin en anonyme
 */
  signInAnon() {
    this.authService.anonymousLogin().then();
  }
/**
 * Signin 
 */
  signIn() {
    this.authService.login(this.mail, this.pwd).then();
  }
/**
 * Insription
 */
  signUp() {
    this.authService.signUp(this.mail, this.pwd).then();
  }
/**
 * Déconnexion
 */
  signOut() {
    this.authService.signOut();
  }
  
}
