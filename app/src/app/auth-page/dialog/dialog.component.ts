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

  signInAnon() {
    this.authService.anonymousLogin().then();
  }

  signIn() {
    this.authService.login(this.mail, this.pwd).then();
  }

  signUp() {
    this.authService.signUp(this.mail, this.pwd).then();
  }

  signOut() {
    this.authService.signOut();
  }
  logIn() {}
}
