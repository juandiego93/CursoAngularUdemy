import { Component, OnInit } from '@angular/core'
import { UsuarioModel } from '../../models/usuario.model'
import { NgForm } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordar = false

  constructor(private auth: AuthService, private router: Router ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel()
    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email')
      this.recordar = true
    }
  }

  onSubmit(form: NgForm) {

    
    if (form.invalid) { return false }

    Swal.fire({
      title: 'Procesando!',
      text: 'Espere por favor ! ',
      icon: 'info',
      confirmButtonText: 'Cool',
      allowOutsideClick: false
    })

    Swal.showLoading();

    this.auth.registerUser(this.usuario).subscribe(response => {
      console.log(response)
      Swal.close()
      if (this.recordar) {
        localStorage.setItem('email', this.usuario.email)
      }
      this.router.navigateByUrl('/home')
    },
      (Exc) => {
        Swal.fire({
          title: 'Error al crear cuenta nueva',
          text: Exc.error.error.message,
          icon: 'error',
          confirmButtonText: 'Cerrar',
        })
      })
  }

}
