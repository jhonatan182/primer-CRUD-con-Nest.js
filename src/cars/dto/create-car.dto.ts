import { IsString, IsBoolean } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;
  @IsString({ message: 'El nombre del modelo debe ser string' })
  readonly model: string;
}
