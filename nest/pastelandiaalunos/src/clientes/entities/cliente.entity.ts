import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Pedido } from './../../pedidos/entities/pedido.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Pedido, (pedido) => pedido.cliente)
  pedidos: Pedido[] 
};