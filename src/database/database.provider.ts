import { DataSource } from 'typeorm';
import { Paciente } from '../paciente/entities/paciente.entity';
import { Cita } from '../cita/entity/cita.entity';
import { Medico } from '../medico/entities/medico.entity';          // <-- IMPORTAR
import { Especialidad } from '../especialidad/entities/especialidad.entity'; // <-- IMPORTAR

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '12345',
        database: 'citas_db',
        
        entities: [Paciente, Cita, Medico, Especialidad], 
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];