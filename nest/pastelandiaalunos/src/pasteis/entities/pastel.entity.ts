import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Ingrediente } from './ingrediente.entity';

@Entity()
export class Pastel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  preco: number;

  @OneToMany(() => Ingrediente, (ingrediente) => ingrediente.pastel)
  ingredientes: Ingrediente[];
}
