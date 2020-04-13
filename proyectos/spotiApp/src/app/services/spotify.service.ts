import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDRoJlBhXgHabjaijYLFP-y3JziO-1-aCKmZPNU6kfp4nE0kzs4J9xSdiKWIYamw1wun5zggNjNKTxKfiw'
    });


    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map((data: any) => data['albums'].items));
  }


  getArtist(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(map((data: any) => data['artists'].items));
  }
}
