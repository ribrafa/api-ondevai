import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioArmazenados } from "../usuarios.dm";
import { Injectable } from "@nestjs/common";


@Injectable()
@ValidatorConstraint({async:true})
export class EmailUnicoValidator implements ValidatorConstraintInterface{
    constructor(private clsUsuariosArmazenados:UsuarioArmazenados){}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const validarEmail = await this.clsUsuariosArmazenados.validaEmail(value);
        return !validarEmail;
    }
    
}


export const EmailUnico = (opcaoValidacao: ValidationOptions)=>{
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcaoValidacao,
            constraints: [],
            validator: EmailUnicoValidator,
        })
    }
}