import { Module } from '@nestjs/common';
import { EventosModule } from './Eventos/eventos.module';
import { UsuarioModule } from './Usuarios/usuarios.module';
import { UsuarioArmazenados } from './Usuarios/usuarios.dm';
import { UsuarioController } from './Usuarios/usuarios.controller';
import { EmailUnicoValidator } from './Usuarios/validacao/email-unico-validator';


@Module({
  imports: [EventosModule, UsuarioModule],
  controllers: [UsuarioController],
  providers: [UsuarioArmazenados, EmailUnicoValidator],
})
export class AppModule {}
