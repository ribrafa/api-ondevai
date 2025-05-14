import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico-validator";
import { ApiProperty } from "@nestjs/swagger";
import { SenhaForte } from "../validacao/senha-forte-validator";

export class alteraUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @IsOptional()
    @ApiProperty({
        example: 'Djalma Mansueto',
        description: 'Esse campo vai ser utilizado como identificação do usuario'
    })
    NOME:string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "01/01/2000",
        description:'Esse campo vai ser utilizado para definir data de nascimento'
    })
    DATANASC: string;
    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "Masculino,Feminino e Outros",
        description:'Esse campo vai ser utilizado para definir o sexo do Usuario'
    })
    SEXO:string;

    @IsEmail(undefined,{message:"email é invalido"})
    @EmailUnico({message:"email já cadastrado. Tente novamente"})
    @IsOptional()
    @ApiProperty({
        example: 'djalma.mansueto@gmail.com',
        description: 'deve conter apenas email do usuario'
    })
    EMAIL: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: '14-991100370',
        description: 'deve constar numero de telefone do usuario '
    })
    TELEFONE: string;

    @MinLength(6,{message:"Senha precisa de pelo menos 6 digitos"})
    @SenhaForte({message:"Senha muito fraca. Tente Novamente"})
    @IsOptional()
    @ApiProperty({
        example:'Kjszkjk01@',
        description:'a senha deve conter letras Maiuscolas, minuscolas, numeros e caracteres'
    })
    SENHA: string;
    

}