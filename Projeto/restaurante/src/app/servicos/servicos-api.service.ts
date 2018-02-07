import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class ServicosApiService {

  constructor(private http: Http) { }

  private restaurantes:any = [];

  private restaurante: any = {
    id: Int32Array,
    nomeRestaurante: String
  }

  getAllRestaurantes(){
    this.http.get(`http://localhost:54543/api/Restaurantes`) 
    .map(data => data.json()).subscribe(dados => this.restaurantes = dados);
    console.log(this.restaurantes);

    return this.restaurantes;
   }

}
