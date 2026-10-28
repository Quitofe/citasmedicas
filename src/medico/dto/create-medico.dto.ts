import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMedicoDto {
  @IsString()
  @IsNotEmpty()
  'nombre': string;

  @IsString()
  @IsNotEmpty()
  'apellido': string;

  @IsString()
  @IsNotEmpty()
  'licencia': string;

  @IsNumber()
  @IsNotEmpty()
  'especialidadId': number; 
}