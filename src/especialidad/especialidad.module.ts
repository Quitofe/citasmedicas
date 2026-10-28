import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { EspecialidadService } from './especialidad.service';
import { EspecialidadController } from './especialidad.controller';
import { Especialidad } from './entities/especialidad.entity';
import { Medico } from '../medico/entities/medico.entity'; // <-- Importar

@Module({
  imports: [TypeOrmModule.forFeature([Especialidad, Medico])], 
  controllers: [EspecialidadController],
  providers: [EspecialidadService],
  exports: [TypeOrmModule]
})
export class EspecialidadModule {}