import { Body, Controller, Get, Post, Param, Put, Delete } from "@nestjs/common";
import { EventoArmazanado } from "./eventos.dm"
import { EventoEntity } from "./eventos.entity";
import { v4 as uuid } from "uuid";
import { criarEventoDTO } from "./eventos.dto/eventos.dto";
import { alterarEventoDTO } from "./eventos.dto/alteraeventos.dto";
import { ApiBadRequestResponse, ApiResponse, ApiTags } from "@nestjs/swagger";


@ApiTags('evento')
@Controller('eventos')
export class EventosController {
    constructor(private clsEventosArmazanados: EventoArmazanado){}

    @Post()
    @ApiResponse({status: 201, description: "Retorna que houve sucesso"})
    async adicionarEvento(@Body() dadosEvento: criarEventoDTO){
 
        var novoEvento = new EventoEntity(uuid(), dadosEvento.nome, dadosEvento.genero, dadosEvento.data, dadosEvento.horario,
            dadosEvento.descricao, dadosEvento.localizacao, dadosEvento.image);
        this.clsEventosArmazanados.adicionarEvento(novoEvento);
 
        var eventos = {
            dadosEvento : dadosEvento,
            status: "Evento Criado"
        }
        return eventos;
    }

    @Get()
    todosEventos(){
        return this.clsEventosArmazanados.todosEventos();
    }

    @Get(':id')
    buscarID(@Param('id') id: string) {
    return this.clsEventosArmazanados.eventoPorID(id);
    }

    @Put(':id')
    atualizaEvento(@Param('id') id: string, @Body() dadosAtualizados: alterarEventoDTO) {
        const EventoAtualizado = this.clsEventosArmazanados.atualizaEvento(id, dadosAtualizados)
 
        return{
            eventos: EventoAtualizado,
            message: 'Evento Atualizado'
        }
    }


    @Delete(':id')
    excluirEvento(@Param('id') id: string) {
        const EventoExcluido = this.clsEventosArmazanados.excluirEvento(id)

        return{
            eventos: EventoExcluido,
            message: 'Evento Excluido'
        }
        
    }






     // @Get(':id/compartilhar')
    // EventoDetalhado(@Param('id') id: string) {
    // const evento = this.clsEventosArmazanados.eventoPorID(id);
    // if (!evento) {
    // throw new Error('Evento não encontrado');
    // }

    // return {
    //     message: `Você está assistindo ao filme ${evento.nome} com a sinopse ${evento.genero}. Esse filme é do ano de ${evento.descricao} e tem o genero ${evento.localizacao}`
    //     }
    // }
}