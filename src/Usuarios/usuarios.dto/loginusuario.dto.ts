import { IsEmail, MinLength } from "class-validator";

export class LoginUsuarioDTO{

    @IsEmail(undefined, {message: 'email invalido'})
    email: string;

    @MinLength( 8, {message: 'Senha deve ter no minimo 8 digitos'})
    senha: string;

}