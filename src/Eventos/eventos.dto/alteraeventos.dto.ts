import { IsNotEmpty, IsString, IsOptional, IsIn, IsInt } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class alterarEventoDTO{
    
    @IsString()
    
    @IsNotEmpty({message: "Nome do Evento não pode ser vazio"})
    @IsOptional()
    @ApiProperty({
        example: 'Samba 90s',
        description: 'Esse campo vai ser utilizado como identificação do nome do Evento a ser criado'
    })
    NOME:string

    @IsInt()
    @IsOptional()
    @ApiProperty({
        example: 'Musica/Show',
        description: 'Esse campo vai ser utilizado como identificação do genero do Evento a ser criado'
    })
    GENERO: number;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: '10/10/2010',
        description: 'Esse campo vai ser utilizado para descrever a data do Evento a ser criado'
    })
    DATA_EVENTO: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: '18:00',
        description: 'Esse campo vai ser utilizado para descrever o horario do Evento a ser criado'
    })
    HORARIO: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: '+18 ou Livre',
        description: 'Esse campo vai ser utilizado para informar a classficação do evento'
    })
    CLASSIFICACAO: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'O evento Samba 90s está em sua 6ª edição e vai ocorrer no dia...',
        description: 'Esse campo vai ser utilizado para descrever o Evento a ser criado'
    })
    DESCRICAO: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'Rua 10',
        description: 'Esse campo vai ser utilizado como identificação do endereço do Evento a ser criado'
    })
    ENDERECO: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'Numero 8-53',
        description: 'Esse campo vai ser utilizado como identificação do numero do endereço do Evento a ser criado'
    })
    NUMERO: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: '17017000',
        description: 'Esse campo vai ser utilizado como identificação do CEP do Evento a ser criado'
    })
    CEP: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'São Paulo',
        description: 'Esse campo vai ser utilizado como identificação da cidade do Evento a ser criado'
    })
    CIDADE: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'imagemOnline.jpg',
        description: 'Esse campo vai ser utilizado para selecionar a imagem de capa do Evento'
    })
    IMAGE: string;
    
    @IsString()
    @ApiProperty({
        example: 'imagemOnline.jpg',
        description: 'Esse campo vai ser utilizado para selecionar a imagem de capa do Evento'
    })
    USUARIO: string;
}