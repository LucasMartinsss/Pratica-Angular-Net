import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ServicosApiService } from '../../servicos/servicos-api.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cadastro-pratos',
  templateUrl: './cadastro-pratos.component.html',
  styleUrls: ['./cadastro-pratos.component.css']
})
export class CadastroPratosComponent implements OnInit {

  constructor(private http: Http,
    private servicos: ServicosApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.getAllRestaurantes();

    this.activatedRoute.queryParams
      .subscribe(params => {
          if(params.id != undefined){

              this.flag = 1;

              this.http.get(`http://localhost:54543/api/Pratos/${params.id}`)
                       .map(data => data.json())
                       .subscribe(data => this.prato = data); 

                                    } 
                          });
  }

  flag:number = 0;
  private restaurantes:any = [];
  
  prato: any = {
    id: 0,
    nomePrato: "",
    precoPrato: 0.00,
    restauranteID: 0
  }

  onSubmitCadastro(form){
  
      if(this.prato.nomePrato != "" && this.prato.precoPrato != "" && this.prato.restauranteID != 0){

            var headers = new Headers();
            headers.append('Content-Type', 'application/json');

            if(this.flag == 0){
              this.http.post(`http://localhost:54543/api/Pratos`, JSON.stringify(this.prato), {
                        headers: headers
                        })
                        .subscribe((data:any) => {console.log(data); this.voltarPagina();});
          }
            else{
              this.http.put(`http://localhost:54543/api/Pratos/${this.prato.id}`, JSON.stringify(this.prato), {
                      headers: headers})
                      .subscribe((data:any) => {console.log(data); this.voltarPagina();});
          }
      }
   }

  getAllRestaurantes(){
    this.http.get(`http://localhost:54543/api/Restaurantes`) 
    .map(data => data.json()).subscribe(dados => this.restaurantes = dados);
   }


   voltarPagina(){
    this.router.navigate(['pratos']);
    //this.router.navigateByUrl('/pratos');
  }
}
