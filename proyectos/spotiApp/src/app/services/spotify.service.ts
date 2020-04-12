import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDacZxwPSeKZhe0flpHMJIF3LIzSFmP6RBnJ5-lsL4s20BnwbbiTXAAB77t84hXnZS1x_O-t4a3Z7JyLeY'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
    // .subscribe(newReleases => {
    //   console.log(newReleases);
    // });
  }
}
