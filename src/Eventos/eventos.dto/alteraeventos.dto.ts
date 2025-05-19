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
    nome:string

    @IsInt()
    @IsOptional()
    @ApiProperty({
        example: 'Musica/Show',
        description: 'Esse campo vai ser utilizado como identificação do genero do Evento a ser criado'
    })
    genero: number;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: '10/10/2010',
        description: 'Esse campo vai ser utilizado para descrever a data do Evento a ser criado'
    })
    data_evento: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: '18:00',
        description: 'Esse campo vai ser utilizado para descrever o horario do Evento a ser criado'
    })
    horario: string;

    @IsInt()
    @IsOptional()
    @ApiProperty({
        example: '+18 ou Livre',
        description: 'Esse campo vai ser utilizado para informar a classficação do evento'
    })
    classificacao: number;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'O evento Samba 90s está em sua 6ª edição e vai ocorrer no dia...',
        description: 'Esse campo vai ser utilizado para descrever o Evento a ser criado'
    })
    descricao: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'Rua 10',
        description: 'Esse campo vai ser utilizado como identificação do endereço do Evento a ser criado'
    })
    endereco: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'Numero 8-53',
        description: 'Esse campo vai ser utilizado como identificação do numero do endereço do Evento a ser criado'
    })
    numero: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: '17017000',
        description: 'Esse campo vai ser utilizado como identificação do CEP do Evento a ser criado'
    })
    cep: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'São Paulo',
        description: 'Esse campo vai ser utilizado como identificação da cidade do Evento a ser criado'
    })
    cidade: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'imagemOnline.jpg',
        description: 'Esse campo vai ser utilizado para selecionar a imagem de capa do Evento'
    })
    image: string;
    
    @IsString()
    @ApiProperty({
        example: 'imagemOnline.jpg',
        description: 'Esse campo vai ser utilizado para selecionar a imagem de capa do Evento'
    })
    usuario: string;
}