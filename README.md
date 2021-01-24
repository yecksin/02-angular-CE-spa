# Instalar boostrap con npm

npm install bootstrap --save
npm install jquery --save
npm install popper.js --save


## En el angular.json

buscamos donde dice 

      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/spa",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "aot": true,
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/popper.js/dist/umd/popper.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
          },

# Rutas 

## Mandar datos por ruta
       { path: 'heroe/:id', component: HeroeComponent },   

### Opcion 1
 <a [routerLink]="['heroe',i]" class="btn btn-outline-primary btn-block">Ver más...</a>

  El / interviene

 <a [routerLink]="['/heroe',i]" class="btn btn-outline-primary btn-block">Ver más...</a>

### Opcion 2

Con una funcion

import { Router } from '@angular/router';
  constructor(
    private router: Router
    ) { }

  verHeroe(i:number){
    this.router.navigate(['/heroes',i])
  }    

html

 <div class="card" *ngFor="let heroe of heroes; let i = index">
<button (click)="verHeroe(i)" type="button" class="btn btn-outline-primary btn-block">Ver más...</button>

## Recibir datos por ruta

import { ActivatedRoute } from '@angular/router';
  heroe:any;
  constructor(
    private activatedRoute: ActivatedRoute
    ) { }

        this.activatedRoute.params.subscribe(params =>{
      console.log(this._heroes.getHeroe(params['id']));
      this.heroe =this._heroes.getHeroe(params['id'])
    })

# Pipes
uppercase
date:'y'   => se puede configurar con parametros
<h1>{{heroe['nombre'] | uppercase}} <small>{{heroe.aparicion |date:'y'}}</small> </h1>

# buscador

# @Input
import { Component, Input, OnInit } from '@angular/core';
  @Input() heroe:any = {}
  @Input() index:number=0;

  insertado en otro componente :
  <app-heroe-tarjeta [heroe]=heroe [index]=i *ngFor="let heroe of heroes; let i = index"></app-heroe-tarjeta>

# Output
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
@Output() heroeSeleccionado: EventEmitter<number> = new EventEmitter();


<app-heroe-tarjeta (heroeSeleccionado)="verHeroe(i)" [heroe]=heroe [index]=i *ngFor="let heroe of heroes; let i = index"></app-heroe-tarjeta>