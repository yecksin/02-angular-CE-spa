import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {  HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];
  constructor(
    private _heroesService:HeroesService,
   

    ) { 

    }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }



}


export interface Heroe{
  nombre:string;
  bio:string;
  img:string;
  aparicion:string;
  casa:string;
}