import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CepPipe } from './pipes/cep.pipe';
import { TelefonePipe } from './pipes/telefone.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CepPipe,
    TelefonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, FooterComponent
  ]
})
export class SharedModule { }
