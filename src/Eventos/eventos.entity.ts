import { GENERO } from 'src/Generos/genero.entity';
import { USUARIO } from 'src/Usuarios/usuarios.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class EVENTO{
    @PrimaryColumn()
    ID: string;

    @Column({length: 255})
    NOME: string;

    @ManyToOne(() => GENERO, (genero) => genero.EVENTOS)
    @JoinColumn({ name: 'ID_GENERO' })
    GENERO: GENERO;

    @Column({length: 255})
    DATA_EVENTO: string;

    @Column({ length: 255 })
    HORARIO: string; 

    @Column({length: 255})
    CLASSIFICACAO: string; 

    @Column({length: 255})
    DESCRICAO: string;

    @Column({length: 255})
    ENDERECO: string;

    @Column({length: 255})
    NUMERO: string;

    @Column({length: 255})
    CEP: string;

    @Column({length: 255})
    CIDADE: string;

    @Column({length: 255})
    IMAGE: string;

    @ManyToOne(() => USUARIO)
    @JoinColumn({ name: 'ID_USUARIO' })
    USUARIO: USUARIO;
}