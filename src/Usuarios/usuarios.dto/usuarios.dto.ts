import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @ApiProperty({
        example: 'Djalma Mansueto',
        description: 'Esse campo vai ser utilizado como identificação do usuario'
    })
    nome:string;

    @IsInt()
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
    sexo:string;

    @IsEmail(undefined,{message:"email é invalido"})
    @EmailUnico({message:"email já cadastrado. Tente novamente"})
    @ApiProperty({
        example: 'djalma.mansueto@gmail.com',
        description: 'deve conter apenas email do usuario'
    })
    email: string;

    @IsString()
    @ApiProperty({
        example: '14-991100370',
        description: 'deve constar numero de telefone do usuario '
    })
    telefone: string;

    @MinLength(6,{message:"Senha precisa de pelo menos 6 digitos"})
    @ApiProperty({
        example:'Kjszkjk01@',
        description:'a senha deve conter letras Maiuscolas, minuscolas, numeros e caracteres'
    })
    senha: string;
    

}