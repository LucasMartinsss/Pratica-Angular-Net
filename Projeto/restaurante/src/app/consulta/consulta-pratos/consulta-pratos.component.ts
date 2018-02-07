import { ServicosApiService } from './../../servicos/servicos-api.service';
import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-consulta-pratos',
  templateUrl: './consulta-pratos.component.html',
  styleUrls: ['./consulta-pratos.component.css']
})
export class ConsultaPratosComponent implements OnInit {

  constructor(private http: Http,private servicos: ServicosApiService) { }

  ngOnInit() {
    this.getAll();
  }

  private pratos:any = [];

  prato: any = {
    id: 0,
    nomePrato: null,
    precoPrato: 0.00,
    restauranteID: null
  }

  onSubmitDelete(id){
    
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.delete(`http://localhost:54543/api/Pratos/${id}`)
       .subscribe((data:any) => {console.log(data)}); 

       location.reload();

  }

  getAll(){
    this.http.get(`http://localhost:54543/api/Pratos`) 
    .map(data => data.json()).subscribe(dados => this.pratos = dados);
   }


}
