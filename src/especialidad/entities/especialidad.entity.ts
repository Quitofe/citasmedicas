import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Medico } from '../../medico/entities/medico.entity';

@Entity()
export class Especialidad {
  @PrimaryGeneratedColumn()
  'id': number;

  @Column()
  'nombre': string; 

  @Column()
  'descripcion': string;

  @OneToMany(() => Medico, (medico: Medico) => medico.especialidad)
  'medicos': Medico[];
}