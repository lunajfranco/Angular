import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe-home',
  templateUrl: './heroe-home.component.html',
  styles: [`
    .container{
      margin: 15px;
    }
  `
  ]
})
export class HeroeHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
