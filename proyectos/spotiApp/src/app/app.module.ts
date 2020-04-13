import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


// RUTAS
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';

//Servicios
// import { SpotifyService } from './services/spotify.service'; // No se inyecta porque en el servicio hay Injectable: providedIn: 'root'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
    // SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
