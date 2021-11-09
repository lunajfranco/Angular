import { Component } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent  {

  get Resultados() {
    return this.GifsServiceService.resultados;
  }
constructor( private GifsServiceService: GifsServiceService){}
}
