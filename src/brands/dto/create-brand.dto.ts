import { IsString, MinLength } from 'class-validator';

export class CreateBrandDto {
  @IsString({ message: 'El nombre de la marca debe ser string' })
  @MinLength(3, { message: 'Debe de ser mas de 3 caracteres' })
  readonly name: string;
}
