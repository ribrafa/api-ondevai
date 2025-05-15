import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class EVENTO{
    @PrimaryColumn()
    ID: string;

    @Column({length: 255})
    NOME: string;

    @Column({length: 255})
    GENERO: string;

    @Column({length: 255})
    DATA: string;

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
}