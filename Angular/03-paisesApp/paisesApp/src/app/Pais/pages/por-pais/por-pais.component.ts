import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  termino: string = 'hola mundo';
  
  constructor(private PaisService: PaisService){}
  
  buscar() {
    this.PaisService.busqueda(this.termino)
    .subscribe(respuesta => {
      console.log(respuesta);
    });
  }

}
