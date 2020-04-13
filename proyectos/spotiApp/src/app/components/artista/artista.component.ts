import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artist: any = {};
  loadingArtist: boolean;

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.loadingArtist = true;
    this.activatedRoute.params.subscribe((params) => {
      this.loadingArtist = false;
      this.getArtista(params['id']);
    });
  }


  getArtista(id: string) {
    this.loadingArtist = true;
    this.spotifyService.getArtist(id).subscribe((artist) => {
      this.artist = artist;
      this.loadingArtist = false;
    });
  }
}
