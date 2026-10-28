import { DataSource } from 'typeorm';
import { Paciente } from './src/paciente/entities/paciente.entity';
import { Cita } from './src/cita/entity/cita.entity';
import { Medico } from 'src/medico/entities/medico.entity';
import { Especialidad } from 'src/especialidad/entities/especialidad.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',         
  password: '12345',              
  database: 'citas_db',  
  entities: [Paciente, Cita,Medico,Especialidad],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: true,
});