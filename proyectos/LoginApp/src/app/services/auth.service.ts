import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:'
  private API_KEY = 'AIzaSyBPBSWm9mx7ngK1FpnpGjMcVTaB36Gh-_g'
  userToken: string
  // Crear usuarios
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


  // login 
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient, private router: Router) {
    this.readToken()
  }


  logOut() {
    localStorage.removeItem('idToken')
    this.router.navigateByUrl('/login')
  }

  logIn(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    }
    return this.http.post(`${this.url}signInWithPassword?key=${this.API_KEY}`, authData)
      .pipe(
        map(resp => {
          this.saveToken(resp['idToken'])
          return resp
        })
      )
  }

  registerUser(usuario: UsuarioModel) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    }
    return this.http.post(`${this.url}signUp?key=${this.API_KEY}`, authData)
      .pipe(
        map(resp => {
          this.saveToken(resp['idToken'])
          return resp
        })
      )
  }


  private saveToken(idToken: string) {
    this.userToken = idToken
    localStorage.setItem('token', idToken)

    let hoy = new Date()
    hoy.setSeconds(3600)
    localStorage.setItem('expira', hoy.getTime().toString())
  }


  readToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token')
    } else {
      this.userToken = ''
    }
    return this.userToken
  }


  isAuthenticated(): boolean {
    if (this.userToken.length < 2) {
      return false
    }

    const expira = Number(localStorage.getItem('expira'))
    const expiraDate = new Date()
    expiraDate.setTime(expira)
    if (expiraDate > new Date()) {
      return true;
    } else {
      return false
    }
    return this.userToken.length > 2
  }
}
