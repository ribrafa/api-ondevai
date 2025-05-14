export class ListaUsuarioDTO{
    constructor(
        readonly ID: string,
        readonly NOME: string,
        readonly DATANASC: number,
        readonly SEXO: string,
        readonly EMAIL: string,
        readonly SENHA: string
    ){}
}