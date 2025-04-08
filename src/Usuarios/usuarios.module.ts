import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuarios.controller";
import { UsuarioArmazenados } from "./usuarios.dm";
import { StrongPassValidator } from "./validacao/senha-forte-validator";
import { EmailUnicoValidator } from "./validacao/email-unico-validator";

@Module({
    imports:[],
    controllers:[UsuarioController],
    providers:[UsuarioArmazenados, StrongPassValidator]
})

export class UsuarioModule{}