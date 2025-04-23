import * as bcrypt from 'bcrypt';

export class UsuarioEntity{

    id: String;
    nome: string;
    datanasc: string;
    sexo: string;
    telefone: string;
    email: string;      
    senha: string;


    constructor(id: string, nome: string, datanasc: string, sexo: string, telefone: string, email: string, senha: string ){
        const saltOrRounds = 10;

        this.id = id;
        this.nome = nome;
        this.datanasc = datanasc;
        this.sexo = sexo;
        this.telefone = telefone;
        this.email = email;
        this.senha = bcrypt.hashSync(senha,saltOrRounds);
    }

    TrocarSenha(senhaNova){
        const saltOrRounds = 10;
        this.senha = bcrypt.hashSync(senhaNova, saltOrRounds);
    
    }

    login(senha){
        return bcrypt.compareSync(senha, this.senha);
    }
}