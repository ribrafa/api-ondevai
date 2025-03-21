import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class alterarEventoDTO{
    @IsString()
    
    @IsNotEmpty({message: "nome não pode ser vazio"})
    nome:string

    @IsInt()
    genero: string;

    @IsString()
    descricao: string;

    @IsEmail()
    localizacao: string;

    @IsString()
    image: string;
}