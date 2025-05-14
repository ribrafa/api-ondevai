import { USUARIO } from "../usuarios.entity";

export class RetornoUsuarioDTO{
    constructor(
        readonly status: string,
        readonly usuario: USUARIO | null
        ){}
}