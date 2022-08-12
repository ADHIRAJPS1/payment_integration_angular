import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  one = 150
  two = 2000
  three = 3000
  four = 4000

  constructor() { }

  ngOnInit(): void {
  }

}
