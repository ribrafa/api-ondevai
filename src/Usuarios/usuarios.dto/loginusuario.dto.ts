import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { EmailUnico } from "src/validacao/email.validator";

export class loginUsuarioDTO{
    
    @IsEmail(undefined, {message: "email inválido"})
    @ApiProperty({
        example: "joao@teste.com",
        description: "Email do usuário, deve ser informado um email válido e que não se repita"
    })
    email: string;

    @MinLength(6, {message: "senha deve ter no minimo 6 digitos"})
    @ApiProperty({
        example: "Senha@444151241",
        description: "Senha do usuário, deve ter pelo menos 8 digitos, tendo numeros, letras e caracteres especiais"
    })
    senha:string;
    
}