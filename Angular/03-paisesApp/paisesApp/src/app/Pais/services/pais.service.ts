import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Paises } from '../interfaces/pais.interface';




@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v2';

  get httpParams(){
    return new HttpParams().set( 'fields', 'name,capital,alpha2code,flag,population' );
  }

  constructor(private http: HttpClient) { }
  
  busqueda( termino: string): Observable<Paises[]> {

    const url = `${this._apiUrl}/name/${termino}`;

    return this.http.get<Paises[]>(url, {params: this.httpParams});
  }
  buscarPorCapital( termino: string): Observable<Paises[]>{
    const urlCapital = `${this._apiUrl}/capital/${termino}`;
    return this.http.get<Paises[]>(urlCapital, {params: this.httpParams});
  }
  buscarPorId( id: string): Observable<Paises>{
    const urlId = `${this._apiUrl}/alpha/${id}`;
    return this.http.get<Paises>(urlId);
  }
  buscarPorRegion( termino: string) : Observable<Paises[]>{

    const urlRegion = `${this._apiUrl}/regionalbloc/${termino}`;
    return this.http.get<Paises[]>(urlRegion, {params: this.httpParams});
  }
}
