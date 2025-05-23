import { IsEmail, MinLength } from "class-validator";

export class AlteraSenhaDTO {
  @IsEmail()
  email: string;

  @MinLength(6)
  senha: string;
}