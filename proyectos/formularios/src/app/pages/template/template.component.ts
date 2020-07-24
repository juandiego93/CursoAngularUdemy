import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service'
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombres: '',
    apellidos: '',
    correo: '',
    pais: 'CRI',
    genero: ''
  }
  paises: any[] = []

  constructor(private paisesService: PaisService) { }

  ngOnInit(): void {
    this.paisesService.getCountries().subscribe(response => {
      this.paises = response
      this.paises.unshift({ nombre: 'Seleccione un país', codigo: '' })
    })
  }

  guardar(forma: NgForm) {

    if (forma.invalid) {

      Object.values(forma.controls).forEach(control => {
        control.markAsTouched();
      });

      return;
    }

    console.log(forma);
  }

}
