import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

import {Observable} from "rxjs";
import {WikipediaService} from "../../core/services/http/wikipedia.service";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({selector: "app-description", templateUrl: "./description.component.html", styleUrls: ["./description.component.scss"]})
export class DescriptionComponent implements OnInit {
  private wiki$: Observable<any>;
  public description_wiki: string;
  @Input()name !: string;
  @Output()newItemEvent = new EventEmitter<string>();
  constructor(private wiki : WikipediaService) {}

  ngOnInit(): void {
    
    if(this.name.length != 0){
    this.wiki$ = this.wiki.getArticle("fr", this.name);
    this.wiki$.subscribe((wiki : any) => {
      if (wiki.query.pages[0].missing == true) {
        this.description_wiki = "";
      } else {
        this.description_wiki = wiki.query.pages[0].extract;
      }
      this.addNewItem(this.description_wiki);
    });
  }
  }

  formatDesc(description : string): string {
    var searchFor = ".";
    var count = 0;
    var pos = description.indexOf(searchFor);

    /*     console.log(count);
    console.log(description); */
    return description;
  }

  addNewItem(value : string) {
    this.newItemEvent.emit(value);
  }
}
