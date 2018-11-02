import { Component, OnInit } from '@angular/core';

import { RootObject } from './cats.score';

import { CatMashService } from './catmash.service';

@Component({
  selector: 'catmash-root',
  templateUrl: './catmash.component.html',
  styleUrls: ['./catmash.component.css']
})

export class CatMashComponent implements OnInit {

  constructor(private catMashService: CatMashService) { }

  Cats : RootObject[];
  firstCatImage : RootObject;
  secondCatImage : RootObject;

  getCats(): void {
    this.catMashService.getCats().subscribe(Cats => this.Cats = Cats);
  }

  ngOnInit() {
    try {
      this.catMashService.getCats().toPromise().then(Cats => {
          this.Cats = Cats;
      },
      error => {
          console.log(error, "error");
      }).then(x => {
        var firstCatNumber = Math.floor(Math.random() * this.Cats.length);
        var secondCatNumber = Math.floor(Math.random() * this.Cats.length);
        console.log(firstCatNumber + " - " + secondCatNumber + " - " + this.Cats.length);
        this.firstCatImage = this.Cats[firstCatNumber];
        this.secondCatImage = this.Cats[secondCatNumber];
      });
    } catch (e) {
      console.log(e);
    }
  }

}