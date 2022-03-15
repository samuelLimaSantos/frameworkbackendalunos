import { Cliente } from './../../clientes/entities/cliente.entity';
import { Column, Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Pastel } from '../../pasteis/entities/pastel.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numeroPedido: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.pedidos, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({name: 'idCliente'})
  cliente: Cliente;

  @Column()
  valorTotal: number;

  @Column()
  valorDesconto: number;

  @CreateDateColumn()
  dataPedido: Date;

  @ManyToMany(() => Pastel)
  @JoinTable()
  itens: Pastel[];
}
