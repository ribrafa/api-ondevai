export class ListaEventoDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly id_genero: number,
        readonly generoNome: string,
        readonly data_evento: string,
        readonly horario: string,
        readonly classificacao: number,
        readonly descricao: string,
        readonly endereco: string,
        readonly numero: string,
        readonly cidade: number,
        readonly cidadeNome: string,
        readonly image: string,
        readonly id_usuario: string
    ){}
}

export class ListagemEventosDTO{
    constructor(
        readonly evento: ListaEventoDTO[],
    ){}
}