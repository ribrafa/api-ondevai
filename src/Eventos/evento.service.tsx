import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { EVENTO } from './eventos.entity';
import { criarEventoDTO } from './eventos.dto/eventos.dto';
import Datas from 'src/utils/data';



@Injectable()
export class EVENTOService {
  objDatas: Datas;
  constructor(
    @Inject('EVENTO_REPOSITORY')
    private eventoRepository: Repository<EVENTO>,
  ) {
    this.objDatas = new Datas();
  }

  async listar(): Promise<EVENTO[]> {
  return await this.eventoRepository.find();
}

  async inserir(dados: criarEventoDTO): Promise<RetornoCadastroDTO> {
    let eventos = new EVENTO();
    eventos.ID = uuid();
    eventos.NOME = dados.NOME;
    eventos.GENERO = dados.GENERO;
    eventos.DATA = dados.DATA;
    eventos.HORARIO = dados.HORARIO;
    eventos.CLASSIFICACAO = dados.CLASSIFICACAO;
    eventos.DESCRICAO = dados.DESCRICAO;
    eventos.ENDERECO = dados.ENDERECO;
    eventos.NUMERO = dados.NUMERO;
    eventos.CEP = dados.CEP;
    eventos.CIDADE = dados.CIDADE;
    eventos.IMAGE = dados.IMAGE;
    
    return this.eventoRepository.save(eventos)
      .then((result) => {
        return {
            id: eventos.ID,
            message: "EVENTO cadastrado!"
          } as RetornoCadastroDTO;
      })
      .catch((error) => {
        return {
            id: "",
            message: "Houve um erro ao cadastrar." + error.message
          } as RetornoCadastroDTO;
    })
  }

  async localizarID(ID: string): Promise<EVENTO> {
    const objeto = await this.eventoRepository.findOne({
      where: {
        ID,
      },
    });

    if (!objeto) {
        throw new Error(`EVENTO com ID ${ID} não encontrado`);
    }

    return objeto;
  };


  async remover(id: string): Promise<RetornoObjDTO> {
    const evento = await this.localizarID(id);

    return this.usuarioRepository.remove(evento)
      .then((result) => {
        return <RetornoObjDTO>{
          return: evento,
          message: "EVENTO excluido!"
        };
      })
      .catch((error) => {
        return <RetornoObjDTO>{
          return: evento,
          message: "Houve um erro ao excluir." + error.message
        };
      });
  }

  async alterar(id: string, dados: alteraUsuarioDTO): Promise<RetornoCadastroDTO> {
    const evento = await this.localizarID(id);

    Object.entries(dados).forEach(
      ([chave, valor]) => {
        if (chave === 'ID') {
          return;
        }
        else{
          evento[chave] = valor;
        }
      }
    )

    return this.eventoRepository.save(evento)
      .then((result) => {
        return <RetornoCadastroDTO>{
          id: evento.ID,
          message: "EVENTO alterado!"
        };
      })
      .catch((error) => {
        return <RetornoCadastroDTO>{
          id: "",
          message: "Houve um erro ao alterar." + error.message
        };
      });
    }

}

}