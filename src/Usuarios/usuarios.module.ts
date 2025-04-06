import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuarios.controller";
import { UsuarioArmazenados } from "./usuarios.dm";
import { StrongPassValidator } from "./validacao/senha-forte-validator";

@Module({
    imports:[],
    controllers:[UsuarioController],
    providers:[UsuarioArmazenados, StrongPassValidator]
    //Add as informaçõesem providers para o teste no Postman
})

export class UsuarioModule{}