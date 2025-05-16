import * as bcrypt from 'bcrypt';
import { EVENTO } from 'src/Eventos/eventos.entity';
import { FILES } from 'src/files/files.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class USUARIO{
    @PrimaryColumn()
    ID: string;

    @Column({length: 255})
    NOME: string;

    @Column({length: 255})
    DATANASC: string;

    @Column({length: 255})
    SEXO: string;

    @Column({ length: 255 })
    TELEFONE: string; 

    @Column({length: 255})
    EMAIL: string; 

    @Column({length: 255})
    SENHA: string; 
    
    @OneToMany(() => EVENTO, evento => evento.USUARIO)
    EVENTOS: EVENTO[]; 

    trocaSenha(senha){
        const saltOrRounds = 10;
        this.SENHA = bcrypt.hashSync(senha,saltOrRounds)
    }

    login(senha){
        return bcrypt.compareSync(senha,this.SENHA);
    }
}