import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

}
