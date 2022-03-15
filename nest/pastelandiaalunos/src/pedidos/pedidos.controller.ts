import { PedidosService } from './pedidos.service';
import { Body, Controller, Post } from "@nestjs/common";
import CreatePedidoDto from './dto/createPedidoDTO';

@Controller('pedidos')
export class PedidosController {
  constructor(
    private pedidosService: PedidosService
  ) {}


  @Post()
  async fazerPedido(@Body() createPedido: CreatePedidoDto) {
      return this.pedidosService.fazerPedido(createPedido);
  }
}