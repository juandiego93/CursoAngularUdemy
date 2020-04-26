import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  countries: any[] = [];
  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string;

  constructor(private http: HttpClient, private spotify: SpotifyService) {
    this.error = false;
    this.loading = true;
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((countries: any) => {
      this.countries = countries;
    });
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
      this.loading = false;
    }, (errorServices) => {
      this.error = true;
      this.loading = false;
      this.messageError = errorServices.error.error.message;
    });
  }

  ngOnInit(): void {
  }

}
