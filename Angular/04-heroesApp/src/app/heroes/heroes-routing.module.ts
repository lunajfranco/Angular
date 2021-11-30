import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroeHomeComponent } from './pages/heroe-home/heroe-home.component';

const routes : Routes= [
    {
      path: '',
      component: HeroeHomeComponent,
      children: [
        {
          path: 'list',
          component : ListadoComponent        
        },
        {
          path: 'agree',
          component: AgregarComponent
        },
        {
          path: 'editar/:id',
          component: AgregarComponent
        },
        {
          path: 'search',
          component: BuscarComponent
        },
        {
          path: ':id',
          component: HeroeComponent
        },
        {
          path: '**',
          redirectTo: 'list'
        }
      ]
    }]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
