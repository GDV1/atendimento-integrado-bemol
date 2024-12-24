import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';

@NgModule({
  declarations: [
    DadosClienteComponent,
    SucessoCadastroComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CadastroModule { }
