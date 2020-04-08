import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: {}[];

  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getAllHeroes();
  }

  viewHeroe(index) {
    this.router.navigate(['/heroe', index]);
  }


}
