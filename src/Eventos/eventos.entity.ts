import { GENERO } from 'src/Generos/genero.entity';
import { USUARIO } from 'src/Usuarios/usuarios.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class EVENTO{
    @PrimaryColumn()
    id: string;

    @Column({length: 255})
    nome: string;

    @ManyToOne(() => GENERO, (genero) => genero.eventos)
    @JoinColumn({ name: 'id_genero' })
    genero: GENERO;

    @Column({length: 255})
    data_evento: string;

    @Column({ length: 255 })
    horario: string; 

    @Column({})
    classificacao: number; 

    @Column({length: 255})
    descricao: string;

    @Column({length: 255})
    endereco: string;

    @Column({length: 255})
    numero: string;

    @Column({length: 255})
    cep: string;

    @Column({length: 255})
    cidade: string;

    @Column({length: 255})
    image: string;

    @ManyToOne(() => USUARIO)
    @JoinColumn({ name: 'id_usuario' })
    usuario: USUARIO;
}