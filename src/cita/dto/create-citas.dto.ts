import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCitaDto {

  @IsNotEmpty()
  'fecha': string;

  @IsNotEmpty()
  'hora': string;

  @IsNotEmpty()
  @IsNotEmpty()
  'medicoId': number;

  @IsNumber()
  @IsNotEmpty()
  'pacienteId': number;

  @IsNotEmpty()
  'doctor': string;

}