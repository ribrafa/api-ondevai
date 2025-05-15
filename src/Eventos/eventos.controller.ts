import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { RetornoCadastroDTO } from "src/dto/retorno.dto";
import { EVENTOService } from "./evento.service";
import { criarEventoDTO } from "./eventos.dto/eventos.dto";
import { alterarEventoDTO } from "./eventos.dto/alteraeventos.dto";
import { ListaEventoDTO, ListagemEventosDTO } from "./eventos.dto/listaEvento.dto";

@ApiTags('eventos')
@Controller('/eventos')
export class EventoController{
    
    constructor(private readonly eventoService: EVENTOService){}
    @Post()
    @ApiCreatedResponse({ description:'Retorna que houve sucesso na inclusão'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na inclusão.'})
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async criarEvento(@Body() dadosEvento: criarEventoDTO): Promise <RetornoCadastroDTO>{       
        return this.eventoService.inserir(dadosEvento) 
    }

    @Put('/:id')
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na alteração'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na alteração.'})
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async alteraEvento(@Body() dadosNovos: alterarEventoDTO,@Param('id') id: string){
        return this.eventoService.alterar(id,dadosNovos)             
    }

    @Delete('/:id')
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na exclusão'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na exclusão.'})
    async removeEvento(@Param('id') id: string){
        return this.eventoService.remover(id);   
    }

    @Get('/:ID') 
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na consulta'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na consulta.'})
    async retornaEventoId(@Param('ID') ID:string){
        var eventosListados = await this.eventoService.localizarID(ID);
        const ListaRetorno = new ListaEventoDTO(eventosListados.ID,
                                                eventosListados.NOME,
                                                eventosListados.GENERO,
                                                eventosListados.DATA,
                                                eventosListados.HORARIO,
                                                eventosListados.CLASSIFICACAO,
                                                eventosListados.DESCRICAO,
                                                eventosListados.ENDERECO,
                                                eventosListados.NUMERO,
                                                eventosListados.CEP,
                                                eventosListados.CIDADE,
                                                eventosListados.IMAGE);

        return {
                Evento: ListaRetorno
            };
    }


    @Get()
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na consulta'})
    async retornaEvento(): Promise <ListagemEventosDTO>{
        var eventosListados = await this.eventoService.listar();
        const ListaRetorno = eventosListados.map(
            evento => new ListaEventoDTO(evento.ID,
                                        evento.NOME,
                                        evento.GENERO,
                                        evento.DATA,
                                        evento.HORARIO,
                                        evento.CLASSIFICACAO,
                                        evento.DESCRICAO,
                                        evento.ENDERECO,
                                        evento.NUMERO,
                                        evento.CEP,
                                        evento.CIDADE,
                                        evento.IMAGE
            )
        );

        const retorno = new ListagemEventosDTO(ListaRetorno);


        return retorno
    }
}