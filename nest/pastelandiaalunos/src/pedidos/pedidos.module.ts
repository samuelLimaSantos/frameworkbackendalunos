import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";

import { Pastel } from './../pasteis/entities/pastel.entity';
import { Pedido } from './entities/pedido.entity';
import { PedidosController } from './pedidos.controller';
import { PedidosService } from './pedidos.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    Pedido,
    Pastel
  ])],
  providers: [PedidosService],
  controllers: [PedidosController]
})
export class PedidosModule {}