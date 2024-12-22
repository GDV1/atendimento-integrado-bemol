export interface DadosCliente {
    nome: string,
    email: string,
    dataNascimento: Date,
    telefone: string,
    endereco: Endereco
}

export interface Endereco {
    cep: string,
    logradouro: string,
    numero: number,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
    unidade: string,
    localidade: string,
    regiao: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
}