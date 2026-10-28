import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Especialidad } from './entities/especialidad.entity';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';

@Injectable()
export class EspecialidadService {
  constructor(
    @InjectRepository(Especialidad)
    private readonly especialidadRepository: Repository<Especialidad>,
  ) {}

  async create(createEspecialidadDto: CreateEspecialidadDto) {
    const nuevaEspecialidad = this.especialidadRepository.create(createEspecialidadDto);
    return await this.especialidadRepository.save(nuevaEspecialidad);
  }

  async findAll() {
    return await this.especialidadRepository.find();
  }

  async findOne(id: number) {
    const especialidad = await this.especialidadRepository.findOneBy({ id });
    if (!especialidad) throw new NotFoundException(`Especialidad ${id} no encontrada`);
    return especialidad;
  }

  async update(id: number, updateEspecialidadDto: any) {
    await this.especialidadRepository.update(id, updateEspecialidadDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.especialidadRepository.delete(id);
    return `Especialidad ${id} eliminada`;
  }
}