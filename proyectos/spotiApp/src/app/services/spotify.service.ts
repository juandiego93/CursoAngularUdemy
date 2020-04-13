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
      'Authorization': 'Bearer BQDzWoqwCma3meebysyb8AYwxk7itn2F1wRCL52q8ngeVFlNy7TBcGTboEnsx-4CCB9r4SbudOziRvI08sU'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map((data: any) => data['albums'].items));
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(map((data: any) => data['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`)
      // .pipe(map((data: any) => data['artists'].items));
  }
}
