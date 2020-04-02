import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
    mostrar: boolean = true;

    frase: any = {
        tipo: 'Moraleja',
        mensaje: 'Un gran poder lleva una gran responsabilidad',
        autor: 'Ben Parker'
    };

    personajes: string[] = ['Spiderman', 'Batman', 'Venom'];
}
