import * as bcrypt from 'bcrypt';
import { EVENTO } from 'src/Eventos/eventos.entity';
import { FILES } from 'src/files/files.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class USUARIO{
    @PrimaryColumn()
    id: string;

    @Column({length: 255})
    nome: string;

    @Column({length: 255})
    datanasc: string;

    @Column({})
    sexo: number;

    @Column({ length: 255 })
    telefone: string; 

    @Column({length: 255})
    email: string; 

    @Column({length: 255})
    senha: string; 
    
    @OneToMany(() => EVENTO, evento => evento.usuario)
    eventos: EVENTO[]; 

    trocaSenha(senha){
        const saltOrRounds = 10;
        this.senha = bcrypt.hashSync(senha,saltOrRounds)
    }

    login(senha){
        return bcrypt.compareSync(senha,this.senha);
    }
}