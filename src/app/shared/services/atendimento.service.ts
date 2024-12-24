import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../typings/dados-cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  URL_API: string = 'https://viacep.com.br/ws';

  constructor(
    private http: HttpClient
  ) { }
  
  getAddress(cep: string): Observable<Endereco> {
    const url = `${this.URL_API}/${cep}/json`;
    return this.http.get<Endereco>(url);
  }
  
}
