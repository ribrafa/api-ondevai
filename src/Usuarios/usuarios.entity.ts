import * as bcrypt from 'bcrypt';

export class UsuarioEntity{

    id: String;
    nome: string;
    datanasc: string;
    sexo: string;
    email: string;      
    telefone: string; 
    senha: string;


    constructor(id: string, nome: string, datanasc: string, sexo: string, email: string, telefone: string, senha: string ){
        const saltOrRounds = 10;

        this.id = id;
        this.nome = nome;
        this.datanasc = datanasc;
        this.sexo = sexo;
        this.email = email;
        this.telefone = telefone;
        this.senha = senha;
    }

    TrocarSenha(senhaNova){
        const saltOrRounds = 10;
        this.senha = bcrypt.hashSync(senhaNova, saltOrRounds);
    
    }

    login(senha){
        return bcrypt.compareSync(senha, this.senha);
    }
}