import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'f-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  showFiller: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
