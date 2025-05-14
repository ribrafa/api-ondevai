import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { USUARIOService } from '../Usuarios/usuario.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUnicoValidator implements ValidatorConstraintInterface {
  constructor(private readonly usuarioService: USUARIOService) {}

  async validate(value: string, args: ValidationArguments): Promise<boolean> {
    const usuario = await this.usuarioService.buscarPorEmail(value);
    return !usuario;
  }

  defaultMessage(args: ValidationArguments) {
    return 'E-mail já está em uso.';
  }
}

export function EmailUnico(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: EmailUnicoValidator,
    });
  };
}

