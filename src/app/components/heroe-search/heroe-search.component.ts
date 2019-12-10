import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html',
  styleUrls: ['./heroe-search.component.css']
})
export class HeroeSearchComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              // tslint:disable-next-line: variable-name
              private _heroesService: HeroesService, private router: Router) {



   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      // tslint:disable-next-line: no-string-literal
      console.log(params['termino']);
      // tslint:disable-next-line: no-string-literal
      this.termino = params['termino'];
      // tslint:disable-next-line: no-string-literal
      this.heroes = this._heroesService.buscarHeroes( params['termino']);
  });

  }
  verHeroe( idx: number ) {
   // this.router.navigate( ['/heroe', idx] );
  }

}
