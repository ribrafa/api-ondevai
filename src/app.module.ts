import { Module } from '@nestjs/common';
import { EventosModule } from './Eventos/eventos.module';


@Module({
  imports: [EventosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
