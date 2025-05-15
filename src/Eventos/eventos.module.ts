import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.modules';
import { EventoController } from './eventos.controller';
import { eventoProviders } from './eventos.providers';
import { EVENTOService } from './evento.service';

@Module({  
  imports: [DatabaseModule],
  controllers: [EventoController],  
  providers: [...eventoProviders,
    EVENTOService],
})
export class EventoModule {}