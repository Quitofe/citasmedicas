import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cita } from './entity/cita.entity'; // Respetando tu ruta en singular
import { Medico } from '../medico/entities/medico.entity';
import { Paciente } from '../paciente/entities/paciente.entity';

@Injectable()
export class CitaService {

  constructor(
    @InjectRepository(Cita)
    private citaRepository: Repository<Cita>,

    @InjectRepository(Medico)
    private medicoRepository: Repository<Medico>, // Inyectamos Médico

    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>, 
  ) {}

  
  findAll() {
    return this.citaRepository.find({
      relations: {
        medico: true,
        paciente: true,
      },
    });
  }

  
  async create(citaDto: any) {
    const { fecha, hora, medicoId, pacienteId } = citaDto;

    
    const medico = await this.medicoRepository.findOneBy({ id: medicoId });
    if (!medico) {
      throw new NotFoundException(`Médico con ID ${medicoId} no encontrado`);
    }

    
    const paciente = await this.pacienteRepository.findOneBy({ id: pacienteId });
    if (!paciente) {
      throw new NotFoundException(`Paciente con ID ${pacienteId} no encontrado`);
    }

    
    const nuevaCita = this.citaRepository.create({
      fecha,
      hora,
      medico,
      paciente
    });

    return this.citaRepository.save(nuevaCita);
  }

  async update(id: number, cita: any) {
    await this.citaRepository.update(id, cita);
    return this.citaRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.citaRepository.delete(id);
    return `Cita ${id} eliminada`;
  }
}