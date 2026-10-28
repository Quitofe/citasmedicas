import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitaController } from './cita.controller';
import { CitaService } from './cita.service';
import { Cita } from './entity/cita.entity';
import { MedicoModule } from '../medico/medico.module'; 
import { PacienteModule } from '../paciente/paciente.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Cita]),
    MedicoModule,   
    PacienteModule, 
  ],
  controllers: [CitaController],
  providers: [CitaService]
})
export class CitaModule {}