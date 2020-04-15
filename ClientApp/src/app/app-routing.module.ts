import { EstampillaRegistroComponent } from './covid-19/Estampilla-registro/Estampilla-registro.component';

import { EstampillaConsultaComponent } from './covid-19/Estampilla-consulta/Estampilla-consulta.component';

import { NgModule, Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

{

path: 'EstampillaConsulta',

component: EstampillaConsultaComponent

},

{

path: 'EstampillaRegistro',

component: EstampillaRegistroComponent

}

];

@NgModule({

declarations: [],

imports: [

CommonModule,

RouterModule.forRoot(routes)

],

exports:[RouterModule]

})

export class AppRoutingModule { }