import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ],
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  value: string;

  constructor(private activatedRoute: ActivatedRoute, private heroeServices: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.value = params['value'];
      this.heroes = this.heroeServices.searchHeroes(params['value']);
    });
  }

}
