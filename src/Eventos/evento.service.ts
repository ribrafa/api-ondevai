import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { EVENTO } from './eventos.entity';
import { criarEventoDTO } from './eventos.dto/eventos.dto';
import Datas from 'src/utils/data';
import { alterarEventoDTO } from './eventos.dto/alteraeventos.dto';
import { GENERO } from 'src/Generos/genero.entity';


@Injectable()
export class EVENTOService {
  constructor(
    @Inject('EVENTO_REPOSITORY')
    private eventoRepository: Repository<EVENTO>,

    @Inject('GENERO_REPOSITORY')
    private generoRepository: Repository<GENERO>
  ) {}

  async listar(): Promise<EVENTO[]> {
    return await this.eventoRepository.find({
      relations: ['GENERO'],
    });
  }

  async inserir(dados: criarEventoDTO): Promise<RetornoCadastroDTO> {
    let evento = new EVENTO();
    evento.ID = uuid();
    evento.NOME = dados.NOME;
    
    // Verifica se o gênero foi encontrado
    const genero = await this.generoRepository.findOne({ where: { ID: dados.GENERO } });

    if (!genero) {
        throw new Error(`GENERO com ID ${dados.GENERO} não encontrado`);
    }

    evento.GENERO = genero; // Atribui o objeto de Gênero encontrado
    evento.DATA = dados.DATA_EVENTO;
    evento.HORARIO = dados.HORARIO;
    evento.CLASSIFICACAO = dados.CLASSIFICACAO;
    evento.DESCRICAO = dados.DESCRICAO;
    evento.ENDERECO = dados.ENDERECO;
    evento.NUMERO = dados.NUMERO;
    evento.CEP = dados.CEP;
    evento.CIDADE = dados.CIDADE;
    evento.IMAGE = dados.IMAGE;

    return this.eventoRepository.save(evento)
        .then((result) => {
            return {
                id: evento.ID,
                message: "EVENTO cadastrado!"
            } as RetornoCadastroDTO;
        })
        .catch((error) => {
            return {
                id: "",
                message: "Houve um erro ao cadastrar." + error.message
            } as RetornoCadastroDTO;
        });
}

  async localizarID(ID: string): Promise<EVENTO> {
    const objeto = await this.eventoRepository.findOne({
      where: { ID },
      relations: ['GENERO'],
    });
  
    if (!objeto) {
      throw new Error(`EVENTO com ID ${ID} não encontrado`);
    }
  
    return objeto;
  }


  async remover(id: string): Promise<RetornoObjDTO> {
    const evento = await this.localizarID(id);

    return this.eventoRepository.remove(evento)
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

  async alterar(id: string, dados: alterarEventoDTO): Promise<RetornoCadastroDTO> {
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