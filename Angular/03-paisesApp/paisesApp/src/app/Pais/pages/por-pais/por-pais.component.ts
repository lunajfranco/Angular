import { Component } from '@angular/core';
import { Paises } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  errorMessage: string = '';
  paises: Paises[] = [];
  constructor(private PaisService: PaisService) {}

  buscar( termino : string) {
    this.hayError = false;
    this.termino = termino;
    this.PaisService.busqueda(this.termino).subscribe(
      (respons) => {
        console.log(respons);
        this.paises = respons;
        if (!respons.length){
          this.hayError = true;
          this.errorMessage = "No se encontró nada con";
        }
      },
      (err) =>{
        console.log('error', err);
        this.errorMessage = "No se encontró nada";
        this.hayError = true;
        this.paises = [];
      },
      () => {
        console.log('complete')
      }
    );
    
    
  }
}
