import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { EVENTO } from './eventos.entity';
import { criarEventoDTO } from './eventos.dto/eventos.dto';
import { alterarEventoDTO } from './eventos.dto/alteraeventos.dto';
import { GENERO } from 'src/Generos/genero.entity';
import { USUARIO } from 'src/Usuarios/usuarios.entity';


@Injectable()
export class EVENTOService {
  constructor(
    @Inject('EVENTO_REPOSITORY')
    private eventoRepository: Repository<EVENTO>,

    @Inject('GENERO_REPOSITORY')
    private generoRepository: Repository<GENERO>,

    @Inject('CIDADE_REPOSITORY')
    private cidadeRepository: Repository<GENERO>,

    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<USUARIO>
  ) { }

  async listar(): Promise<EVENTO[]> {
    return await this.eventoRepository.find({
      relations: ['genero', 'usuario'],
    });
  }

  async inserir(dados: criarEventoDTO): Promise<RetornoCadastroDTO> {
    let evento = new EVENTO();
    evento.id = uuid();
    evento.nome = dados.nome;


    const cidade = await this.cidadeRepository.findOne({ where: { id: dados.cidade } });
    if (!cidade) {
      throw new Error(`CIDADE com ID ${dados.cidade} não encontrado`);
    }

    const genero = await this.generoRepository.findOne({ where: { id: dados.genero } });
    if (!genero) {
      throw new Error(`GENERO com ID ${dados.genero} não encontrado`);
    }

    const usuario = await this.usuarioRepository.findOne({ where: { id: dados.usuario } });
    if (!usuario) {
      throw new Error(`USUARIO com ID ${dados.usuario} não encontrado`);
    }

    evento.genero = genero;
    evento.data_evento = dados.data_evento;
    evento.horario = dados.horario;
    evento.classificacao = dados.classificacao;
    evento.descricao = dados.descricao;
    evento.endereco = dados.endereco;
    evento.numero = dados.numero;
    evento.cidade = cidade;
    evento.image = dados.image;
    evento.usuario = usuario;

    return this.eventoRepository.save(evento)
      .then((result) => {
        return {
          id: evento.id,
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

  async localizarID(id: string): Promise<EVENTO> {
    const objeto = await this.eventoRepository.findOne({
      where: { id },
      relations: ['genero', 'usuario'],
    });

    if (!objeto) {
      throw new Error(`EVENTO com ID ${id} não encontrado`);
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
        else {
          evento[chave] = valor;
        }
      }
    )

    return this.eventoRepository.save(evento)
      .then((result) => {
        return <RetornoCadastroDTO>{
          id: evento.id,
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