import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: ` 
  <app-ng-style></app-ng-style>
  <hr>
  <h3>CSS Scope</h3>
  <app-css></app-css>
  <p>
    Hello World - This is a App with Angular
  </p>
  <hr>
  <app-clases></app-clases>
   <p appResaltado>
    Hola mundo
  </p>
  <br>
  <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
