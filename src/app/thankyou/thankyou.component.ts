import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  rate: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.rate = history.state.data['rate'];
  }

}
