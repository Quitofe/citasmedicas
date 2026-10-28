import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medico } from './entities/medico.entity';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { Especialidad } from '../especialidad/entities/especialidad.entity';

@Injectable()
export class MedicoService {
  constructor(
    @InjectRepository(Medico)
    private readonly medicoRepository: Repository<Medico>,

    @InjectRepository(Especialidad)
    private readonly especialidadRepository: Repository<Especialidad>,
  ) {}

  async create(createMedicoDto: CreateMedicoDto) {
    const { nombre, apellido, licencia, especialidadId } = createMedicoDto;

    // 1. Validar que la especialidad exista en la BD
    const specialty = await this.especialidadRepository.findOneBy({ id: especialidadId });
    if (!specialty) {
      throw new NotFoundException(`Especialidad con ID ${especialidadId} no encontrada`);
    }

    // 2. Mapear y crear la entidad del médico
    const nuevoMedico = this.medicoRepository.create({
      nombre,
      apellido,
      licencia,
      especialidad: specialty,
    });

    // 3. Guardar en la base de datos
    return await this.medicoRepository.save(nuevoMedico);
  }

  findAll() {
    return this.medicoRepository.find({
      relations: { especialidad: true },
    });
  }

  async findOne(id: number) {
    const medico = await this.medicoRepository.findOne({
      where: { id },
      relations: { especialidad: true },
    });
    if (!medico) throw new NotFoundException(`Médico con ID ${id} no encontrado`);
    return medico;
  }

  async update(id: number, updateMedicoDto: any) {
    await this.medicoRepository.update(id, updateMedicoDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.medicoRepository.delete(id);
    return `Médico con ID ${id} eliminado con éxito`;
  }
}