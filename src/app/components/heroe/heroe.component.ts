import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  // tslint:disable-next-line: variable-name
  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {

    this.activatedRoute.params.subscribe( params => {
      // tslint:disable-next-line: no-string-literal
      this.heroe = this._heroesService.getHeroe( params['id'] );
    });
   }

  ngOnInit() {

  }

}
