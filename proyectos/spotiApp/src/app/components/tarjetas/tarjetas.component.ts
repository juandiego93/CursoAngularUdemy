import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  viewArtist(item) {
    let artistID;

    if (item.type === 'artist') {
      artistID = item.id;
    } else {
      artistID = item.artists[0].id;
    }

    this.router.navigate(['/artist', artistID]);
  }

}
