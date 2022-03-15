import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import CreateClienteDTO from "./dto/createClienteDTO";
import { Cliente } from "./entities/cliente.entity";

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepositorio: Repository<Cliente>
  ) {}

  async criarCliente(createClienteDto: CreateClienteDTO) {
    const cliente = this.clienteRepositorio.create(createClienteDto)

    await this.clienteRepositorio.save(cliente);
  }
}