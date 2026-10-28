import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicoService } from './medico.service';
import { MedicoController } from './medico.controller';
import { Medico } from './entities/medico.entity';
import { EspecialidadModule } from '../especialidad/especialidad.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Medico]),
    EspecialidadModule, 
  ],
  controllers: [MedicoController],
  providers: [MedicoService],
  exports: [TypeOrmModule], 
})
export class MedicoModule {}