import { Injectable } from '@nestjs/common';
import { EventoEntity } from './eventos.entity'

@Injectable()
export class EventoArmazanado {
  private eventos: EventoEntity[] = [];

    todosEventos() {
    return this.eventos;
  }

  adicionarEvento(evento: EventoEntity) {
    this.eventos.push(evento);
    return evento;
  }


  atualizaEvento(id: string, dadosAtualizacao: Partial<EventoEntity>){
    const evento = this.buscarID(id);

    Object.entries(dadosAtualizacao).forEach(
        ([chave,valor]) => {
            if(chave === 'id'){
                return
            }
            if (valor === undefined){
                return
            }

            evento[chave] = valor;
        }
    )
    return evento;
}

private buscarID(id: string){
    const possivelEvento = this.eventos.find(
        eventoSalvo => eventoSalvo.id === id
    )

    if (!possivelEvento){
        throw new Error('Evento nao econtrado')
    }
    return possivelEvento
}
  excluirEvento(id: string) {
    const evento = this.buscarID(id);

        this.eventos = this.eventos.filter(
            eventoSalvo => eventoSalvo.id !== id
        )

        return evento;
    }

    eventoPorID(id: string): EventoEntity {
      const evento = this.eventos.find(f => f.id === id);
      if (!evento) {
        throw new Error('Filme não encontrado');
      }
      return evento;
    }


}

