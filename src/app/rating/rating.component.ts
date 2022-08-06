import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  rate: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getRate(r: number) {
    this.rate = r;
  }

}
