import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from './entities/paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.dto';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
  ) {}

  async create(createPacienteDto: CreatePacienteDto) {
    const nuevoPaciente = this.pacienteRepository.create(createPacienteDto);
    return await this.pacienteRepository.save(nuevoPaciente);
  }

  async findAll() {
    return await this.pacienteRepository.find();
  }

  async findOne(id: number) {
    const paciente = await this.pacienteRepository.findOneBy({ id });
    if (!paciente) throw new NotFoundException(`Paciente con ID ${id} no encontrado`);
    return paciente;
  }

  async update(id: number, updatePacienteDto: any) {
    await this.pacienteRepository.update(id, updatePacienteDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.pacienteRepository.delete(id);
    return `Paciente con ID ${id} eliminado`;
  }
}