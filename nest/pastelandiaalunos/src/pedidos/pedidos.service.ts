import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';

import { Pastel } from './../pasteis/entities/pastel.entity';
import { Pedido } from './entities/pedido.entity';
import CreatePedidoDto from "./dto/createPedidoDTO";

@Injectable()
export class PedidosService {

  constructor(
    @InjectRepository(Pastel)
    private pastelRepositorio: Repository<Pastel>,
    
    @InjectRepository(Pedido)
    private pedidosRepository: Repository<Pedido>
  ) {}

  async fazerPedido(createPedidoDto: CreatePedidoDto) {
    const { itens, idCliente } = createPedidoDto;


    const pasteis = await this.pastelRepositorio.findByIds(
      itens.map(i => i.id)
    )

    let total = 0;

    pasteis.forEach(pastel => {
      const pastelEncontrado = itens.find(item => item.id === pastel.id)

      if (!pastelEncontrado) new HttpException('400',400);

      const { quantidade } = pastelEncontrado;

      const totalPastel = pastel.preco * quantidade;

      total += totalPastel;
    })


    const pedido = this.pedidosRepository.create({
      cliente: {id: idCliente },
      itens: pasteis,
      numeroPedido: this.generateId(idCliente),
      valorDesconto: 0,
      valorTotal: total,
    });

    await this.pedidosRepository.save(pedido);
  }


  private generateId(idCliente: number): string{
    const date = Date().toString()
    
    return (idCliente + date)
  }

}