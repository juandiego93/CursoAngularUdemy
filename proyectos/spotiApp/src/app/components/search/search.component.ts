import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  searchArtist(termSearch: string) {
    this.loading = true;
    this.spotifyService.getArtists(termSearch).subscribe((data: any) => {
      this.artists = data;
      this.loading = false;
    });
  }

  getArtist(termArtist: string) {

  }

}
