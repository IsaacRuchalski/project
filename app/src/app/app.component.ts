import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({selector: "app-root", templateUrl: "./app.component.html", styleUrls: ["./app.component.scss"]})
export class AppComponent {
  title = "angular-material-tab-router";
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router : Router) {
    this.navLinks = [
      {
        label: "piano",
        link: "./instruments",
        index: 1
      }, {
        label: "map",
        link: "./map",
        index: 2
      }
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find((tab) => tab.link === "." + this.router.url));
    });
  }
}
