import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DadosClienteComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    ReactiveFormsModule
  ]
})
export class CadastroModule { }
