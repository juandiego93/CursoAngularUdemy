import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;
  @ViewChild('lista', IonList) lista: IonList;

  constructor(public deseoService: DeseosService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() { }

  listaSeleccionada(lista: Lista) {
    if (this.terminada) {
      this.router.navigateByUrl(`tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`tabs/tab1/agregar/${lista.id}`);
    }
  }

  borrar(lista) {
    this.deseoService.borrarLista(lista);
  }

  async editarLista(lista: Lista) {
    const alert = await this.alertCtrl.create({
      header: 'Editar Lista',
      inputs: [
        {
          name: 'Titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la Lista'
        }
      ],
      // subHeader: '2',
      message: 'Agregue una nueva lista de tareas',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            lista.titulo = data.Titulo;
            this.deseoService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });
    await alert.present();
  }

}
