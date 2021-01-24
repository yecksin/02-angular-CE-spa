import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  heroe:any;
  constructor(    
    private _heroes:HeroesService,
    private activatedRoute: ActivatedRoute) { 

    this.activatedRoute.params.subscribe(params =>{
      // console.log(this._heroes.getHeroe(params['id']));
      this.heroe =this._heroes.getHeroe(params['id'])
    })
  }

  ngOnInit(): void {
  }

}
