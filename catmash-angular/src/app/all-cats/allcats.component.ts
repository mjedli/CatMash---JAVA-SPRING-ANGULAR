import { Component, OnInit } from '@angular/core';

import { RootObject } from '../model/cats.score';
import { CatMashService } from '../service/catmash.service';

@Component({
  selector: 'catmash-root',
  templateUrl: './allcats.component.html',
  styleUrls: ['./allcats.component.css']
})

export class AllCatsComponent implements OnInit {

  constructor(private catMashService: CatMashService) { }

  Cats : RootObject[];

  /* inti component, get all cats */
  ngOnInit() {
    try {
      this.catMashService.getCats().toPromise().then(Cats => {
          this.Cats = Cats;
      },
      error => {
          console.log(error, "error*****");
      })
    } catch (e) {
      console.log(e);
    }
  }

}