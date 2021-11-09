import { Component } from '@angular/core';
import { GifsServiceService } from '../../gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
})
export class SidebarComponentComponent {

  get Historial() {
    return this.GifsServiceService.historial
  }

  constructor(private GifsServiceService: GifsServiceService){}

  Buscar(termino: string) {
    this.GifsServiceService.buscarGifs(termino);
  }
}
