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

  private catMashUrl = 'catmash';

  Cats : RootObject[];
  firstCatImage : RootObject;
  secondCatImage : RootObject;

  /* update socre of cat*/
  myFavorit(id:string, url:string) {
    try {
      this.catMashService.updateScore(id, url).toPromise().then(x => {},
      error => {
          console.log(error, "error");
      }).then(x => {
        window.location.replace(this.catMashUrl);
      });
    } catch (e) {
      console.log(e);
    }   
  }

  /* get all cats */
  getCats(): void {
    this.catMashService.getCats().subscribe(Cats => this.Cats = Cats);
  }

  /* inti component, get all cats and select two cats */
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

        while(firstCatNumber == secondCatNumber) {
          secondCatNumber = Math.floor(Math.random() * this.Cats.length);
        }

        this.firstCatImage = this.Cats[firstCatNumber];
        this.secondCatImage = this.Cats[secondCatNumber];
      });
    } catch (e) {
      console.log(e);
    }
  }

}