import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { SenhaForte } from "../../validacao/senha-forte.validator";
import { EmailUnico } from "src/validacao/email.validator";

export class alteraUsuarioDTO {
    @IsString()
    @IsNotEmpty({ message: "Nome não pode ser vazio" })
    @IsOptional()
    @ApiProperty({
        example: 'Djalma Mansueto',
        description: 'Esse campo vai ser utilizado como identificação do usuario'
    })
    nome: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "01/01/2000",
        description: 'Esse campo vai ser utilizado para definir data de nascimento'
    })

    datanasc: string;
    @IsNumber()
    @IsOptional()
    @ApiProperty({
        example: "Masculino,Feminino e Outros",
        description: 'Esse campo vai ser utilizado para definir o sexo do Usuario'
    })
    sexo: number;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: '14-991100370',
        description: 'deve constar numero de telefone do usuario '
    })
    telefone: string;

    @IsEmail(undefined, { message: "email é invalido" })
    @EmailUnico({ message: 'Já existe um usuário com este e-mail.' })
    @IsOptional()
    @ApiProperty({
        example: 'djalma.mansueto@gmail.com',
        description: 'deve conter apenas email do usuario'
    })
    email: string;


    @MinLength(6, { message: "Senha precisa de pelo menos 6 digitos" })
    @SenhaForte({ message: "Senha muito fraca. Tente Novamente" })
    @IsOptional()
    @ApiProperty({
        example: 'Kjszkjk01@',
        description: 'a senha deve conter letras Maiuscolas, minuscolas, numeros e caracteres'
    })
    senha: string;

    @MinLength(6, { message: 'A senha repetida precisa de pelo menos 6 dígitos' })
    @IsOptional()
    @ApiProperty({
        example: 'Kjszkjk01@',
        description: 'Repetição da senha para verificação manual no service'
    })
    repeteSenha: string;


}