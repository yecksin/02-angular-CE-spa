import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  heroes:any[] = []
  termino:any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService,
    private router:Router
  ) {

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      // console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino'])
      console.log(this.heroes);
    })
  }

  verHeroe(i:number){
    this.router.navigate(['/heroe',i])
  }

}
