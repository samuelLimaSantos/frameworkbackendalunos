import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Cliente } from './clientes/entities/cliente.entity';
import { Pastel } from './pasteis/entities/pastel.entity';
import { Pedido } from './pedidos/entities/pedido.entity';
import { Ingrediente } from './pasteis/entities/ingrediente.entity';

import { ClientesModule } from './clientes/clientes.module';
import { PasteisModule } from './pasteis/pasteis.module';
import { PedidosModule } from './pedidos/pedidos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'pastelandia-alunos',
      password: 'my-ultra-password',
      database: 'pastelandia-alunos',
      entities: [Pastel, Ingrediente, Pedido, Cliente],
      synchronize: true,
      logging: true,
    }),
    PasteisModule,
    ClientesModule,
    PedidosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
