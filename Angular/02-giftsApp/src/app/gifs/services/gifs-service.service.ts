import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResult, Gifs } from '../interace/gifs-interface';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private _keyApi: string = '5ZrhlAv1ffJEjc0uI2EPuukSsGDd3nv3';
  private _servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Gifs [] = [];

  constructor(private http: HttpClient) {
    //recibe el localstorage para no perder la busqueda
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('historialRespuesta')!) || [];
  }

  get historial() {
  return [...this._historial];
  }
  
  buscarGifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();
    if (!this.historial.includes(query)){
      this._historial.unshift(query);
    }
    this._historial = this._historial.splice(0,10);

    localStorage.setItem('historial', JSON.stringify(this._historial));
    
    const params = new HttpParams()
    .set('api_key', this._keyApi)
    .set('limit', '10')
    .set('q', query);
    
    this.http.get<SearchGifsResult>(`${this._servicioUrl}/search?`, {params})
    .subscribe(( respuesta) => {
      this.resultados = respuesta.data;
      localStorage.setItem('historialRespuesta', JSON.stringify(this.resultados));
    });
  }
}
