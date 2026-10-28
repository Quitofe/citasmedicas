import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CitaService } from './cita.service';

@Controller('cita')
export class CitaController {

  constructor(private citaService: CitaService) {}

  @Get()
  listar() {
    return this.citaService.findAll();
  }

  @Post()
  guardar(@Body() cita: any) {
    console.log('RECIBIDO:', cita);
    return this.citaService.create(cita);
  }

  @Put(':id')
  actualizar(
    @Param('id') id: number,
    @Body() cita: any,
  ) {
    return this.citaService.update(id, cita);
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.citaService.remove(id);
  }
}