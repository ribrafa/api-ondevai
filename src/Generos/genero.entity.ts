import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EVENTO } from '../Eventos/eventos.entity';

@Entity()
export class GENERO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => EVENTO, (evento) => evento.genero)
  eventos: EVENTO[];
}