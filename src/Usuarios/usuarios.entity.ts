import * as bcrypt from 'bcrypt';
import { FILES } from 'src/files/files.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

//classe de usuário, utilizado para manter padrão dos usuários armazenados
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

    @Column({ type: 'datetime' })
    TELEFONE: string; 

    @Column({length: 255})
    EMAIL: string; 

    @Column({length: 255})
    SENHA: string; 

    // @OneToOne(() => PESSOA)
    // @JoinColumn({ name: 'IDPESSOA', referencedColumnName:'ID'})
    // PESSOA: PESSOA;

    @OneToOne(() => FILES)
    @JoinColumn({ name: 'FOTO', referencedColumnName:'ID'})
    FILE: FILES;
  
    trocaSenha(senha){
        const saltOrRounds = 10;
        this.SENHA = bcrypt.hashSync(senha,saltOrRounds)
    }

    login(senha){
        return bcrypt.compareSync(senha,this.SENHA);
    }
}