import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Pastel } from './pastel.entity';

@Entity()
export class Ingrediente {
  @PrimaryColumn()
  nome: string;

  @Column()
  quantidade: number;

  @ManyToOne(() => Pastel, (pastel: Pastel) => pastel.ingredientes, {
    primary: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'pastelId' })
  pastel: Pastel;
}
