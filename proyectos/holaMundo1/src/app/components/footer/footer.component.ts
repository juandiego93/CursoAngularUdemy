import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  date = 0;
  constructor() {
    this.date = new Date().getFullYear();
  }

}
