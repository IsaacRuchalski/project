import {Component, OnInit} from "@angular/core";
import {AuthServiceService} from "../../services/firebase/auth-service.service";
import {MatDialog} from "@angular/material/dialog";
import {MatMenuTrigger} from "@angular/material/menu";
import {AuthPageComponent} from "src/app/auth-page/auth-page.component";

@Component({selector: "app-header", templateUrl: "./header.component.html", styleUrls: ["./header.component.scss"]})
export class HeaderComponent implements OnInit {
  constructor(public authService : AuthServiceService, public dialog : MatDialog) {}

  ngOnInit(): void {
    console.log(this.authService.isUserAnonymousLoggedIn);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AuthPageComponent, {restoreFocus: false});
  }
}
