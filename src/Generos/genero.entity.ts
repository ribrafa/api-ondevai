import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EVENTO } from '../Eventos/eventos.entity';

@Entity()
export class GENERO {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  NOME: string;

  @OneToMany(() => EVENTO, (evento) => evento.GENERO)
  EVENTOS: EVENTO[];
}