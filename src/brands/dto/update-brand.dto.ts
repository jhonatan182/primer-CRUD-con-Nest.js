import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsString, MinLength } from 'class-validator';

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
export class UpdateBrandDto {
  @IsString({ message: 'El nombre de la marca debe ser string' })
  @MinLength(3, { message: 'Debe de ser mas de 3 caracteres' })
  readonly name: string;
}
