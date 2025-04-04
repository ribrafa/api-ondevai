import { Module } from "@nestjs/common";

@Module({
    imports:[],
    controllers:[UsuarioController],
    providers:[UsuarioArmazenado]
})

export class UsuarioModule{}