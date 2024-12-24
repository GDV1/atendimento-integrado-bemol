import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AtendimentoService } from 'src/app/shared/services/atendimento.service';
import { Endereco } from 'src/app/shared/typings/dados-cliente';

@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.scss']
})
export class DadosClienteComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private atendimentoService: AtendimentoService
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      dataNascimento: [null, Validators.compose([Validators.required])],
      telefone: ['', Validators.compose([Validators.required, Validators.pattern('^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$')])],
      cep: ['', Validators.compose([Validators.required, Validators.pattern('\d{5}\d{3}')])],
      logradouro: ['', Validators.compose([Validators.required])],
      numero: [null, Validators.compose([Validators.required])],
      complemento: [''],
      bairro: ['', Validators.compose([Validators.required])],
      cidade: ['', Validators.compose([Validators.required])],
      uf: ['', Validators.compose([Validators.required])],
    })
  }

  consultaCEP(event: any) {
    const cep = event.target.value;
    if (cep !== "") {
      this.atendimentoService.getAddress(cep).subscribe((result) => {
        this.preencherEndereco(result);
      });
    }
  }

  preencherEndereco(dadosEndereco: Endereco) {
    this.formulario?.patchValue({
      logradouro: dadosEndereco.logradouro,
      complemento: dadosEndereco.complemento,
      bairro: dadosEndereco.bairro,
      cidade: dadosEndereco.localidade,
      uf: dadosEndereco.uf
    })
  }

  iniciaAtendimento() {
    if(this.formulario.valid) {
      this.router.navigate(['/cadastro-realizado']);
    } else {
      alert("Formulário Inválido. Verifique os dados e tente novamente")
    }
  }

  // Implementar ngx-mask para CEP e telefone

}
