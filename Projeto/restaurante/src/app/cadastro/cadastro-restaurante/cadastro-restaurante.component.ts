import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ServicosApiService } from '../../servicos/servicos-api.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cadastro-restaurante',
  templateUrl: './cadastro-restaurante.component.html',
  styleUrls: ['./cadastro-restaurante.component.css']
})
export class CadastroRestauranteComponent implements OnInit {

  constructor(private http: Http,
              private servicos: ServicosApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) { }
  

  ngOnInit() {
    
  this.activatedRoute.queryParams
      .subscribe(params => {
          if(params.id != undefined){

              this.flag = 1;

              this.http.get(`http://localhost:54543/api/Restaurantes/${params.id}`)
                       .map(data => data.json())
                       .subscribe(data => this.restaurante = data); 

                                    } 
                          });
             }

  flag:number = 0;

  restaurante: any = {
    id: 0,
    nomeRestaurante: null
  }

  onSubmitCadastro(form){
  
    if(this.restaurante.nomeRestaurante != null && this.restaurante.nomeRestaurante != ""){

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      if(this.flag == 0){
         this.http.post(`http://localhost:54543/api/Restaurantes`, JSON.stringify(this.restaurante), {
          headers: headers})
         .subscribe((data:any) => {console.log(data);this.voltarPagina();});
      }
      else {
        this.http.put(`http://localhost:54543/api/Restaurantes/${this.restaurante.id}`, JSON.stringify(this.restaurante), {
          headers: headers})
         .subscribe((data:any) => {console.log(data); this.voltarPagina();});
      }

         
         
    }
        
   }

   voltarPagina(){
      this.router.navigate(['restaurante']);
    }
}
