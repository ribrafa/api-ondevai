import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CriaUsuarioDTO } from "./usuarios.dto/usuarios.dto";
import { RetornoUsuarioDTO } from "./usuarios.dto/retornoUsuario.dto";
import { ListagemUsuariosDTO, ListaUsuarioDTO } from "./usuarios.dto/listaUsuario.dto";
import { loginUsuarioDTO } from "./usuarios.dto/loginusuario.dto";
import { alteraUsuarioDTO } from "./usuarios.dto/alterausuarios.dto";
import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { USUARIOService } from "./usuario.service";
import { RetornoCadastroDTO } from "src/dto/retorno.dto";

@ApiTags('usuarios')
@Controller('/usuarios')
export class UsuarioController{
    
    constructor(private readonly usuarioService: USUARIOService){}
    @Post()
    @ApiCreatedResponse({ description:'Retorna que houve sucesso na inclusão'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na inclusão.'})
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO): Promise <RetornoCadastroDTO>{       
        return this.usuarioService.inserir(dadosUsuario) 
    }

    @Post('/login')
    @ApiResponse({status: 201, description:'Retorna que houve sucesso na consulta'})    
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async fazerLogin(@Body() dadosLogin: loginUsuarioDTO){
        var retornoLogin = await this.usuarioService.Login(dadosLogin.email,dadosLogin.senha)
        var retorno = new RetornoUsuarioDTO(retornoLogin.status?'Login efetuado, sucesso':'Email ou senha invalidos!',retornoLogin.usuarios);        

        return retorno;       
    }

    @Put('/:id')
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na alteração'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na alteração.'})
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async alteraUsuario(@Body() dadosNovos: alteraUsuarioDTO,@Param('id') id: string){
        return this.usuarioService.alterar(id,dadosNovos)             
    }

    @Delete('/:id')
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na exclusão'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na exclusão.'})
    async removeUsuario(@Param('id') id: string){
        return this.usuarioService.remover(id);   
    }

    @Get('/:ID') 
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na consulta'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na consulta.'})
    async retornaUsuarioId(@Param('ID') ID:string){
        var usuariosListados = await this.usuarioService.localizarID(ID);
        const ListaRetorno = new ListaUsuarioDTO(usuariosListados.id,
                                                usuariosListados.nome,
                                                usuariosListados.datanasc,
                                                usuariosListados.sexo,
                                                usuariosListados.telefone,
                                                usuariosListados.email,
                                                usuariosListados.senha)

        return {
                Usuario: ListaRetorno
            };
    }


    @Get()
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na consulta'})
    async retornaUsuario(): Promise <ListagemUsuariosDTO>{
        var usuariosListados = await this.usuarioService.listar();
        const ListaRetorno = usuariosListados.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome,
                usuario.datanasc,
                usuario.sexo,
                usuario.telefone,
                usuario.email,
                usuario.senha
            )
        );

        const retorno = new ListagemUsuariosDTO(ListaRetorno);


        return retorno
    }
}