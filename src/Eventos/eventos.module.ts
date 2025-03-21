import { Module } from "@nestjs/common";
import { EventosController } from "./eventos.controller";
import { EventoArmazanado } from "./eventos.dm";

@Module({
    controllers: [EventosController],
    providers: [EventoArmazanado]
})

export class EventosModule {}