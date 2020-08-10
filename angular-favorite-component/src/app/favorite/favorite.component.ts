import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavoirte: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isFavoirte = !this.isFavoirte;
  }

}
