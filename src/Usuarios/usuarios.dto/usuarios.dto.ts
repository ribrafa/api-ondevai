import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { SenhaForte } from "../../validacao/senha-forte.validator";
import { EmailUnico } from "src/validacao/email.validator";


export class CriaUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @ApiProperty({
        example: 'Lucas Tico',
        description: 'Esse campo vai ser utilizado como identificação do usuario'
    })
    nome:string;

    @IsString()
    @ApiProperty({
        example: "01/01/2000",
        description:'Esse campo vai ser utilizado para definir data de nascimento'
    })
    datanasc: string;
    
    @IsInt()
    @ApiProperty({
        example: "Masculino,Feminino e Outros",
        description:'Esse campo vai ser utilizado para definir o sexo do Usuario'
    })
    sexo:number; 

    @IsString()
    @ApiProperty({
        example: '(99)-9999999',
        description: 'deve constar numero de telefone do usuario '
    })
    telefone: string;


    @IsEmail(undefined,{message:"email é invalido"})
    @EmailUnico({ message: 'Já existe um usuário com este e-mail.' })
    @ApiProperty({
        example: 'exple@email.com',
        description: 'deve conter apenas email do usuario'
    })
    email: string;


    @MinLength(8,{message:"Senha precisa de pelo menos 8 digitos"})
    @SenhaForte({message:"Senha muito fraca. Tente Novamente"})
    @ApiProperty({
        example:'1234578910',
        description:'a senha deve conter letras Maiuscolas, minuscolas, numeros e caracteres'
    })
    senha: string;
    
}

