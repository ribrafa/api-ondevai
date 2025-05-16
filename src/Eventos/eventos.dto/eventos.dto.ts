import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class criarEventoDTO{
    @IsString()
    
    @IsNotEmpty({message: "Nome do Evento não pode ser vazio"})
    @ApiProperty({
        example: 'Samba 90s',
        description: 'Esse campo vai ser utilizado como identificação do nome do Evento a ser criado'
    })
    NOME:string

    @IsInt()
    @ApiProperty({
        example: 'Musica/Show',
        description: 'Esse campo vai ser utilizado como identificação do genero do Evento a ser criado'
    })
    GENERO: number;

    @IsString()
    @ApiProperty({
        example: '10/10/2010',
        description: 'Esse campo vai ser utilizado para descrever a data do Evento a ser criado'
    })
    DATA_EVENTO: string;

    @IsString()
    @ApiProperty({
        example: '18:00',
        description: 'Esse campo vai ser utilizado para descrever o horario do Evento a ser criado'
    })
    HORARIO: string;

    @IsString()
    @ApiProperty({
        example: '+18 ou Livre',
        description: 'Esse campo vai ser utilizado para informar a classficação do evento'
    })
    CLASSIFICACAO: string;

    @IsString()
    @ApiProperty({
        example: 'O evento Samba 90s está em sua 6ª edição e vai ocorrer no dia...',
        description: 'Esse campo vai ser utilizado para descrever o Evento a ser criado'
    })
    DESCRICAO: string;

    @IsString()
    @ApiProperty({
        example: 'Rua 10',
        description: 'Esse campo vai ser utilizado como identificação do endereço do Evento a ser criado'
    })
    ENDERECO: string;

    @IsString()
    @ApiProperty({
        example: 'Numero 8-53',
        description: 'Esse campo vai ser utilizado como identificação do numero do endereço do Evento a ser criado'
    })
    NUMERO: string;

    @IsString()
    @ApiProperty({
        example: '17017000',
        description: 'Esse campo vai ser utilizado como identificação do CEP do Evento a ser criado'
    })
    CEP: string;

    @IsString()
    @ApiProperty({
        example: 'São Paulo',
        description: 'Esse campo vai ser utilizado como identificação da cidade do Evento a ser criado'
    })
    CIDADE: string;

    @IsString()
    @ApiProperty({
        example: 'imagemOnline.jpg',
        description: 'Esse campo vai ser utilizado para selecionar a imagem de capa do Evento'
    })
    IMAGE: string;
}