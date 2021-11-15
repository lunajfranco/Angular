import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Paises } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  errorMessage: string = '';
  paises: Paises[] = [];
  constructor(private PaisService: PaisService) {}

  buscar( termino : string) {
    this.hayError = false;
    this.termino = termino;
    this.PaisService.buscarPorCapital(this.termino).subscribe(
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
  sugerencias(termino : string){
    this.hayError = false;
  }
}
