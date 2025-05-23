import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.modules';
import { EventoController } from './eventos.controller';
import { eventoProviders } from './eventos.providers';
import { EVENTOService } from './evento.service';
import { generoProviders } from 'src/Generos/genero.providers';
import { UsuarioModule } from 'src/Usuarios/usuarios.module';
import { cidadeProviders } from 'src/Cidades/cidade.providers';

@Module({  
  imports: [DatabaseModule, UsuarioModule],
  controllers: [EventoController],  
  providers: [
    ...eventoProviders,
    ...generoProviders, 
    ...cidadeProviders,
    EVENTOService],
})
export class EventoModule {}