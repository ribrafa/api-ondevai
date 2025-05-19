export class ListaUsuarioDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly datanasc: string,
        readonly sexo: number,
        readonly telefone: string,
        readonly email: string,
        readonly senha: string
    ){}
}

export class ListagemUsuariosDTO{
    constructor(
        readonly usuario: ListaUsuarioDTO[],
    ){}
}