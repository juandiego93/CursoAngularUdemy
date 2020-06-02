import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log('RUTA padre');
      console.log(params);
    })
  }

  ngOnInit(): void {
  }

}
