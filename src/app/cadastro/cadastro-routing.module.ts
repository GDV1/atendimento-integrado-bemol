import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';

const routes: Routes = [
  {
    path: '', 
    component: DadosClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
