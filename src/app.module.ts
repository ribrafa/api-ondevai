import { Module } from '@nestjs/common';
import { UsuarioModule } from './Usuarios/usuarios.module';
import { FilesModule } from './files/files.module';
import { EventoModule } from './Eventos/eventos.module';


@Module({
  imports: [UsuarioModule,FilesModule,EventoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
