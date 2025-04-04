import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuarios.controller";
import { UsuarioArmazenados } from "./usuarios.dm";
import { StrongPassValidator } from "./validacao/senha-forte-validator";

@Module({
    imports:[],
    controllers:[UsuarioController],
    providers:[UsuarioArmazenados, StrongPassValidator]
})

export class UsuarioModule{}