import { IsOptional, IsString } from 'class-validator';

export class FiltroEventosDto {
  @IsOptional()
  @IsString()
  data?: string;

  @IsOptional()
  @IsString()
  genero?: string;

  @IsOptional()
  @IsString()
  cidade?: string;
}