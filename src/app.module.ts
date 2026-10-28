import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { CitaModule } from './cita/cita.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { MedicoModule } from './medico/medico.module';
import { EspecialidadModule } from './especialidad/especialidad.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'citas_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PacienteModule,
    CitaModule,
    AuthModule,
    DatabaseModule,
    ConfigModule,
    MedicoModule,
    EspecialidadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}