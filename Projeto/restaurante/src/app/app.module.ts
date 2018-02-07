import { ServicosApiService } from './servicos/servicos-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { DataTableModule } from "ng2-data-table";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { ConsultaRestauranteComponent } from './consulta/consulta-restaurante/consulta-restaurante.component';
import { ConsultaPratosComponent } from './consulta/consulta-pratos/consulta-pratos.component';
import { CadastroPratosComponent } from './cadastro/cadastro-pratos/cadastro-pratos.component';
import { CadastroRestauranteComponent } from './cadastro/cadastro-restaurante/cadastro-restaurante.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultaRestauranteComponent,
    ConsultaPratosComponent,
    CadastroPratosComponent,
    CadastroRestauranteComponent,
    ConsultaPratosComponent,
    ConsultaRestauranteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    DataTableModule,
    RouterModule.forRoot([
      {path:'home', component: HomeComponent},
      {path:'restaurante', component: ConsultaRestauranteComponent},
      {path:'pratos', component: ConsultaPratosComponent},
      {path:'cadastroPratos', component: CadastroPratosComponent},
      {path:'cadastroRestaurante', component: CadastroRestauranteComponent},
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [ServicosApiService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
