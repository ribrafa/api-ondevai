export class ListaUsuarioDTO{
    constructor(
        readonly ID: string,
        readonly NOME: string,
        readonly DATANASC: string,
        readonly SEXO: string,
        readonly TELEFONE: string,
        readonly EMAIL: string,
        readonly SENHA: string
    ){}
}

export class ListagemUsuariosDTO{
    constructor(
        readonly usuario: ListaUsuarioDTO[],
    ){}
}