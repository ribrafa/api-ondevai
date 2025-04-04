import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuarios.controller";
import { UsuarioArmazenados } from "./usuarios.dm";

@Module({
    imports:[],
    controllers:[UsuarioController],
    providers:[UsuarioArmazenados]
})

export class UsuarioModule{}