import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { USUARIO } from './usuarios.entity';
import { CriaUsuarioDTO } from './usuarios.dto/usuarios.dto';
import { alteraUsuarioDTO } from './usuarios.dto/alteraUsuarios.dto';
import Datas from 'src/utils/data';



@Injectable()
export class USUARIOService {
  objDatas: Datas;
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<USUARIO>,
  ) {
    this.objDatas = new Datas();
  }

  async listar(): Promise<USUARIO[]> {
  return await this.usuarioRepository.find();
}

  async inserir(dados: CriaUsuarioDTO): Promise<RetornoCadastroDTO> {
    let usuarios = new USUARIO();
    usuarios.id = uuid();
    usuarios.nome = dados.nome;
    usuarios.datanasc = dados.datanasc;
    usuarios.sexo = dados.sexo;
    usuarios.telefone = dados.telefone;
    usuarios.email = dados.email;
    usuarios.trocaSenha(dados.senha);
    
    return this.usuarioRepository.save(usuarios)
      .then((result) => {
        return <RetornoCadastroDTO>{
          id: usuarios.id,
          message: "USUARIO cadastrado!"
        };
      })
      .catch((error) => {
        return <RetornoCadastroDTO>{
          id: "",
          message: "Houve um erro ao cadastrar." + error.message
        };
    })
  }

  async localizarID(id: string): Promise<USUARIO> {
    const objeto = await this.usuarioRepository.findOne({
      where: {
        id,
      },
    });

    if (!objeto) {
        throw new Error(`PESSOA com ID ${id} não encontrado`);
    }

    return objeto;
  }

  async localizarEmail(email: string): Promise<USUARIO> {
    const objeto = await this.usuarioRepository.findOne({
      where: {
        email,
      },
    });

    if (!objeto) {
        throw new Error(`PESSOA com EMAIL ${email} não encontrado`);
    }

    return objeto;
  }

  async Login(email: string, senha: string) {
    //primeiro é pesquisado o usuário por meio do email
    const possivelUsuario = await this.localizarEmail(email)

    return {
      //aqui é validada a senha, caso a senha esteja correta, é retornado os dados do usuário e também o status (true para correto, false para incorreto)
      usuarios: possivelUsuario ? (possivelUsuario.login(senha) ? possivelUsuario : null) : null,
      status: possivelUsuario ? possivelUsuario.login(senha): false
    };
  }

  async validaEmail(emailNovo: string) {
    const possivelUsuario = await this.localizarEmail(emailNovo)

    return (possivelUsuario == null)
  }


  async remover(id: string): Promise<RetornoObjDTO> {
    const usuario = await this.localizarID(id);

    return this.usuarioRepository.remove(usuario)
      .then((result) => {
        return <RetornoObjDTO>{
          return: usuario,
          message: "USUARIO excluido!"
        };
      })
      .catch((error) => {
        return <RetornoObjDTO>{
          return: usuario,
          message: "Houve um erro ao excluir." + error.message
        };
      });
  }

  async alterar(id: string, dados: alteraUsuarioDTO): Promise<RetornoCadastroDTO> {
    const usuario = await this.localizarID(id);

    Object.entries(dados).forEach(
      ([chave, valor]) => {
        if (chave === 'ID') {
          return;
        }
        else{
          usuario[chave] = valor;
        }
      }
    )

    return this.usuarioRepository.save(usuario)
      .then((result) => {
        return <RetornoCadastroDTO>{
          id: usuario.id,
          message: "USUARIO alterado!"
        };
      })
      .catch((error) => {
        return <RetornoCadastroDTO>{
          id: "",
          message: "Houve um erro ao alterar." + error.message
        };
      });
    }

    async buscarPorEmail(email: string): Promise<USUARIO | null> {
  return await this.usuarioRepository.findOne({ where: { email: email } });
}

}