import { Module } from '@nestjs/common';
import { UsuarioModule } from './Usuarios/usuarios.module';
import { FilesModule } from './files/files.module';


@Module({
  imports: [UsuarioModule,FilesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
