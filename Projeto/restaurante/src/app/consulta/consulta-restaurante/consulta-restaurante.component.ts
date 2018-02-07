import { Component, OnInit, Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ServicosApiService } from '../../servicos/servicos-api.service';
import {Router, ActivatedRoute} from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-consulta-restaurante',
  templateUrl: './consulta-restaurante.component.html',
  styleUrls: ['./consulta-restaurante.component.css']
})
export class ConsultaRestauranteComponent implements OnInit {
  
  constructor(private http: Http,
    private servicos: ServicosApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    
  }

 ngOnInit() {
  

   this.getAllRestaurantes();
 }
  
  private restaurantes:any = [];

  restaurante: any = {
    id: 0,
    nomeRestaurante: ""
  }
   
    
  onSubmit(form){
    
    if(  this.restaurante.nomeRestaurante != "") {

         this.http.get(`http://localhost:54543/api/Restaurantes`) 
        .map(data => data.json()).subscribe(dados => this.getRestaurante(dados));
      }
      else{
        this.getAllRestaurantes();
      }
   }


  onSubmitDelete(id){
    
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

     this.http.get(`http://localhost:54543/api/Pratos`) 
        .map(data => data.json()).subscribe(dados => this.getPratos(dados, id));
   

     this.http.delete(`http://localhost:54543/api/Restaurantes/${id}`)
       .subscribe((data:any) => {console.log(data)}); 

       location.reload(); 
  }

   getRestaurante(dados){
     
     this.restaurantes = dados.filter(dados => dados.nomeRestaurante.toUpperCase() === this.restaurante.nomeRestaurante.toUpperCase());
   }

   getAllRestaurantes(){
    this.http.get(`http://localhost:54543/api/Restaurantes`) 
    .map(data => data.json()).subscribe(dados => this.restaurantes = dados);
   }

   getPratos(dados, id){
   dados = dados.filter(dados => dados.restauranteID === id);
   
  if(dados.length > 0){
    
      dados.forEach(dados => {this.deletePrato(dados)})
  }
   }

   deletePrato(dados){
     
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    this.http.delete(`http://localhost:54543/api/Pratos/${dados.id}`)
       .subscribe((data:any) => {console.log(data)}); 
   }

  popularDados(dados, form){
   form.setValue({
     id: dados.id,
     nomeRestaurante: dados.nomeRestaurante
      })
  }

  
}
