import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Paises } from '../interfaces/pais.interface';




@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }
  
  busqueda( termino: string): Observable<Paises[]> {

    const url = `${this._apiUrl}/name/${termino}`;

    return this.http.get<Paises[]>(url);

  }
}
