import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { UsuarioArmazenados } from "./usuarios.dm";
import { UsuarioEntity } from "./usuarios.entity";
import { CriaUsuarioDTO } from "./usuarios.dto/usuarios.dto";
import { v4 as uuid } from "uuid";
import { alteraUsuarioDTO } from "./usuarios.dto/alterausuarios.dto";
import { LoginUsuarioDTO } from "./usuarios.dto/loginusuario.dto";
import { ApiTags ,ApiResponse } from "@nestjs/swagger";


@ApiTags('usuario')
@Controller('/usuarios')
export class UsuarioController{
constructor(private clsUsuariosArmazenados: UsuarioArmazenados){

}
    @Post()
    @ApiResponse({status: 201, description: "Retorna que houve sucesso"})
    async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO){

        var novoUsuario = new UsuarioEntity(uuid(), 
        dadosUsuario.nome, 
        dadosUsuario.datanasc,
        dadosUsuario.sexo,
        dadosUsuario.telefone,
        dadosUsuario.email, 
        dadosUsuario.senha);
        this.clsUsuariosArmazenados.AdicionarUsuario(novoUsuario);

        var usuario = {
            dadosUsuario : novoUsuario,
            status: "Usuario Criado"
        }
        return usuario;
    }

    @Put ('/:id')
    async atualizaUsuario(@Param ('id') id:string, @Body() novosDados: alteraUsuarioDTO){

        const usuarioAtualizado = await this.clsUsuariosArmazenados.atualizaUsuario(id, novosDados)

        return{
            usuario: usuarioAtualizado,
            message: 'Usuário atualizado'
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.clsUsuariosArmazenados.removeUsuario(id)

        return{
            usuario: usuarioRemovido,
            message: 'Usuário removido'
        }
    }

    @Get()
    todosUsuarios(){
        return this.clsUsuariosArmazenados.todosUsuarios();
    }

    @Get('/:id')
    async buscarUsuarioPorId(@Param('id') id: string) {
    const usuario = this.clsUsuariosArmazenados.buscaPorID(id);
    return usuario;
    }

    @Post("/login")
    async login(@Body() dadoslogin: LoginUsuarioDTO){
        var login = await this.clsUsuariosArmazenados.validarLogin(dadoslogin.email, dadoslogin.senha);
 
        return{
            status: login.login,
            usuario: login.login?login.usuario: null,
            message: login?"login Efetuado" : "Usuario ou senha Invalidos"
        }
    }
}