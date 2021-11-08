import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

@ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; 

constructor(private GifsServiceService: GifsServiceService){}
buscar() {
  const busqueda = this.txtBuscar.nativeElement.value;

  this.GifsServiceService.buscarGifs(busqueda);
  this.txtBuscar.nativeElement.value = "";
}
}
