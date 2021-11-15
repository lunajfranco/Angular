import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Paises } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private paisService: PaisService) { }
  pais!: Paises;
  ngOnInit(): void { 

    this.activateRoute.params
    .pipe(switchMap( ({id}) => this.paisService.buscarPorId(id)),
    tap( console.log )
    )
    .subscribe( pais => this.pais = pais);
  }
}
