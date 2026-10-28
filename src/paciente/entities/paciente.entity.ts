import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cita } from '../../cita/entity/cita.entity';

@Entity()
export class Paciente {

  @PrimaryGeneratedColumn()
  'id': number;

  @Column()
  'nombre': string;

  @Column()
  'apellido': string;

  @Column()
  'telefono': string;

  @OneToMany(() => Cita, (cita) => cita.paciente)
  'citas': Cita[];
}