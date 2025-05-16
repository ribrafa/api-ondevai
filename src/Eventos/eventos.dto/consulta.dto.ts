export class ListaUsuarioDTO{
    constructor(
        readonly ID: string,
        readonly NOME: string,
        readonly ID_GENERO: number,
        readonly DATA_EVENTO: string,
        readonly HORARIO: string,
        readonly CLASSIFICACAO: string,
        readonly DESCRICAO: string,
        readonly ENDERECO: string,
        readonly NUMERO: string,
        readonly CEP: string,
        readonly CIDADE: string,
        readonly IMAGE: string
    ){}
}