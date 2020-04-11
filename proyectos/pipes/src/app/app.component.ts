import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán América';
  nombre2: string = 'JuAn DiEGo OSORio castriLLON';
  arreglo: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };

  valorPromesa = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });

  fecha: Date = new Date();
  idioma = 'es';

  video = 'https://www.youtube.com/embed/-CBKW-90VxQ';
  activar: boolean = true;
}
