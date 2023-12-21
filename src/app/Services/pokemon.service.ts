import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url: string = GLOBAL.API_URL

  constructor(
    private _http: HttpClient
  ) { }

  getPokemon(nPokemon: number): Observable<any> {
    return this._http.get<any>(this.url + "?limit=" + nPokemon + "&offset=0")
  }

  getPokemonData(id: string): Observable<any> {
    return this._http.get(this.url + id)
  }
}
