import { Module } from '@nestjs/common';
import { EventosModule } from './Eventos/eventos.module';
import { UsuarioModule } from './Usuarios/usuarios.module';


@Module({
  imports: [EventosModule, UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
