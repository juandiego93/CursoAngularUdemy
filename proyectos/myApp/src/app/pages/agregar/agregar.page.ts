import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista.items.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem: string;

  constructor(private deseosService: DeseosService, private activatedRoute: ActivatedRoute) {
    const listaId = this.activatedRoute.snapshot.paramMap.get('listaId');
    this.lista = this.deseosService.obtenerLista(listaId);
  }

  ngOnInit() {
  }

  agregarItem() {
    if (this.nombreItem.length === 0) {
      return false;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
    this.deseosService.guardarStorage();
  }

  checkItem(item: ListaItem) {
    const pendientes = this.lista.items.filter(itemData => !itemData.completado).length;

    if (pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }
    this.deseosService.guardarStorage();
  }

  borrar(i: number) {
    this.lista.items.slice(i, 1);
    this.deseosService.guardarStorage();
  }

}
