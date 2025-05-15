import { EVENTO } from "../eventos.entity";

export class RetornoUsuarioDTO{
    constructor(
        readonly status: string,
        readonly usuario: EVENTO | null
        ){}
}