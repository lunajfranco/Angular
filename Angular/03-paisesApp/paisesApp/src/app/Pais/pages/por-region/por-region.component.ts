import { Component } from '@angular/core';
import { Paises } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 10px;
    }
  `
  ]
})
export class PorRegionComponent{

  regiones : string [] = ['eu', 'asean', 'nafta', 'usan', 'cefta'];
  regionActiva : string = '';
  
  
  paises: Paises[] = [];

  constructor(private paisService : PaisService) { }

  getClass(region:string) : string{
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  buscar( termino : string) {
    if (termino === this.regionActiva){
      return;
    }

    this.regionActiva = termino;

    this.paisService.buscarPorRegion(termino)
    .subscribe(paises => this.paises = paises)
  }

}
