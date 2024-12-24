import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';
import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';

const routes: Routes = [
  {
    path: '', 
    component: DadosClienteComponent
  },
  {
    path: 'cadastro-realizado',
    component: SucessoCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
