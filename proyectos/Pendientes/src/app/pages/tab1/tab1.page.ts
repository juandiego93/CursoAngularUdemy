import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private deseoService: DeseosService, private router: Router, private alertCtrl: AlertController) { }

  async agregarLista() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'Titulo',
          type: 'text',
          placeholder: 'Nombre de la Lista'
        }
      ],
      // subHeader: '2',
      message: 'Agregue una nueva lista de tareas',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            const listaId = this.deseoService.crearLista(data.Titulo);
            this.router.navigateByUrl(`tabs/tab1/agregar/${listaId}`);
          }
        }
      ]
    });

    await alert.present();
  }

}
