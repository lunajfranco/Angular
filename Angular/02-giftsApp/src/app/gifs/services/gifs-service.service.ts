import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private _keyApi: string = '5ZrhlAv1ffJEjc0uI2EPuukSsGDd3nv3';
  private _historial: string[] = [];

  constructor(private http: HttpClient) {}
  get historial() {
  return [...this._historial];
  }
  
  buscarGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();
    if (!this.historial.includes(query)){
      this._historial.unshift(query);
    }
    this._historial = this._historial.splice(0,10);
    
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=5ZrhlAv1ffJEjc0uI2EPuukSsGDd3nv3&q=dragon ball&limit=10')
    .subscribe(( respuesta:any) => {
      console.log(respuesta.data);
    });
  }
}
