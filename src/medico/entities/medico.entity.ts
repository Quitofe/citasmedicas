import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Especialidad } from '../../especialidad/entities/especialidad.entity';
import { Cita } from 'src/cita/entity/cita.entity';

@Entity()
export class Medico {
  @PrimaryGeneratedColumn()
  'id': number;

  @Column()
  'nombre': string;

  @Column()
  'apellido': string;

  @Column()
  'licencia': string; 

  @ManyToOne(() => Especialidad, (especialidad: Especialidad) => especialidad.medicos)
  'especialidad': Especialidad;
  @OneToMany(() => Cita, (cita: Cita) => cita.medico)
  'citas': Cita[];
}