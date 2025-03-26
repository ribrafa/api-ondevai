import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class criarEventoDTO{
    @IsString()
    
    @IsNotEmpty({message: "Nome do Evento não pode ser vazio"})
    @ApiProperty({
        example: 'Samba 90s',
        description: 'Esse campo vai ser utilizado como identificação do nome do Evento a ser criado'
    })
    nome:string

    @IsString()
    @ApiProperty({
        example: 'Musica/Show',
        description: 'Esse campo vai ser utilizado como identificação do genero do Evento a ser criado'
    })
    genero: string;

    @IsString()
    @ApiProperty({
        example: 'O evento Samba 90s está em sua 6ª edição e vai ocorrer no dia...',
        description: 'Esse campo vai ser utilizado para descrever o Evento a ser criado'
    })
    descricao: string;

    @IsString()
    @ApiProperty({
        example: 'Rua 10, Cidade 20 - SP',
        description: 'Esse campo vai ser utilizado como identificação da localização do Evento a ser criado'
    })
    localizacao: string;

    @IsString()
    @ApiProperty({
        example: 'imagemOnline.jpg',
        description: 'Esse campo vai ser utilizado para selecionar a imagem de capa do Evento'
    })
    image: string;
}