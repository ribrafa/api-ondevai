import { Module } from '@nestjs/common';
import { UsuarioController } from './usuarios.controller';
import { USUARIOService } from './usuario.service';
import { usuarioProviders } from './usuario.providers';
import { DatabaseModule } from '../database/database.modules';
import { EmailUnicoValidator } from 'src/validacao/email.validator';

@Module({  
  imports: [DatabaseModule],
  controllers: [UsuarioController],  
  providers: [...usuarioProviders,
    EmailUnicoValidator,
    USUARIOService],
})
export class UsuarioModule {}