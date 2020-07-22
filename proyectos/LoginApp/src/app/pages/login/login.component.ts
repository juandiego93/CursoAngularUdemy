import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel()
  recordar = false

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email')
      this.recordar = true
    }
  }

  login(form: NgForm) {

    if (form.invalid) { return false }

    Swal.fire({
      title: 'Procesando!',
      text: 'Espere por favor ! ',
      icon: 'info',
      confirmButtonText: 'Cool',
      allowOutsideClick: false
    })

    Swal.showLoading()

    this.auth.logIn(this.usuario).subscribe(response => {
      Swal.close()
      console.log(response)
      if (this.recordar) {
        localStorage.setItem('email', this.usuario.email)
      }
      this.router.navigateByUrl('/home')

    }, (err) => {

      console.log(err);

      Swal.fire({
        title: 'Error al Autenticar',
        text: 'Credenciales Inválidas',
        icon: 'error',
        confirmButtonText: 'Cerrar',
      })
    })

  }

}
