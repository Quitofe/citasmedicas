import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Paciente } from '../../paciente/entities/paciente.entity';
import { Medico } from 'src/medico/entities/medico.entity';
@Entity()
export class Cita {

  @PrimaryGeneratedColumn()
  'id': number;

  @Column()
  'fecha': string;

  @Column()
  'hora': string;

  


  @ManyToOne(() => Medico, (medico: Medico) => medico.citas)
 'medico': Medico;

  @ManyToOne(() => Paciente, (paciente) => paciente.citas)
'paciente': Paciente;

}