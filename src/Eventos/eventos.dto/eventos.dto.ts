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
        example: '10/10/2010',
        description: 'Esse campo vai ser utilizado para descrever a data do Evento a ser criado'
    })
    data: string;

    @IsString()
    @ApiProperty({
        example: '18:00',
        description: 'Esse campo vai ser utilizado para descrever o horario do Evento a ser criado'
    })
    horario: string;

    @IsString()
    @ApiProperty({
        example: '+18 ou Livre',
        description: 'Esse campo vai ser utilizado para informar a classficação do evento'
    })
    classificacao: string;

    @IsString()
    @ApiProperty({
        example: 'O evento Samba 90s está em sua 6ª edição e vai ocorrer no dia...',
        description: 'Esse campo vai ser utilizado para descrever o Evento a ser criado'
    })
    descricao: string;

    @IsString()
    @ApiProperty({
        example: 'Rua 10',
        description: 'Esse campo vai ser utilizado como identificação do endereço do Evento a ser criado'
    })
    endereco: string;

    @IsString()
    @ApiProperty({
        example: 'Numero 8-53',
        description: 'Esse campo vai ser utilizado como identificação do numero do endereço do Evento a ser criado'
    })
    numero: string;

    @IsString()
    @ApiProperty({
        example: '17017000',
        description: 'Esse campo vai ser utilizado como identificação do CEP do Evento a ser criado'
    })
    cep: string;

    @IsString()
    @ApiProperty({
        example: 'São Paulo',
        description: 'Esse campo vai ser utilizado como identificação da cidade do Evento a ser criado'
    })
    cidade: string;

    @IsString()
    @ApiProperty({
        example: 'imagemOnline.jpg',
        description: 'Esse campo vai ser utilizado para selecionar a imagem de capa do Evento'
    })
    image: string;
}