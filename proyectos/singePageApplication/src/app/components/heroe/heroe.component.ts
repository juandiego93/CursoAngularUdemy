import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.services';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ],
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private heroeServices: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroeServices.getHeroe(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
