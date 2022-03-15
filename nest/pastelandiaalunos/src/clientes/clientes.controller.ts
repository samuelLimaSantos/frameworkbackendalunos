import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";

import CreateClienteDTO from "./dto/createClienteDTO";
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {

  constructor(
    private clientesService: ClientesService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async criarCliente(@Body() createClienteDto: CreateClienteDTO) {
    return this.clientesService.criarCliente(createClienteDto);
  }
}