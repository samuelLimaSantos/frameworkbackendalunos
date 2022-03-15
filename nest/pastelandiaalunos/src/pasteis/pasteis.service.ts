import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, DeleteResult, Repository } from 'typeorm';
import CreatePastelDTO from './dto/createPastelDTO';
import GetPastelDTO from './dto/getPastelDTO';
import { Ingrediente } from './entities/ingrediente.entity';
import { Pastel } from './entities/pastel.entity';

@Injectable()
export class PasteisService {
  constructor(
    @InjectRepository(Pastel) private pasteisRepository: Repository<Pastel>,
    @InjectRepository(Ingrediente)
    private ingredientesRepository: Repository<Ingrediente>,
  ) {}

  async save(createPastelDTO: CreatePastelDTO): Promise<void> {
    const pastel = new Pastel();
    pastel.nome = createPastelDTO.nome;
    pastel.preco = createPastelDTO.preco;

    const pastelCriado = await this.pasteisRepository.save(pastel);

    const ingredientes = createPastelDTO.ingredientes.map((i) => {
      const ingrediente = new Ingrediente();
      Object.assign(ingrediente, i);
      ingrediente.pastel = pastelCriado;
      return ingrediente;
    });

    await this.ingredientesRepository.save(ingredientes);
  }

  list(getPastelDTO: GetPastelDTO): Promise<Pastel[]> {
    // return this.pasteisRepository.find({
    //   join: {
    //     alias: 'pastel',
    //     innerJoinAndSelect: {
    //       ingrediente: 'pastel.ingredientes',
    //     },
    //   },
    // });

    let qb = this.pasteisRepository.createQueryBuilder('pastel');
    qb = qb.innerJoinAndSelect('pastel.ingredientes', 'ingrediente');

    const { sabor, ingrediente } = getPastelDTO;

    if (sabor) {
      qb = qb.andWhere('LOWER(pastel.nome) like :nome', {
        nome: `%${sabor.toLowerCase()}%`,
      });
    }

    if (ingrediente) {
      qb = qb.andWhere('LOWER(ingrediente.nome) like :ingrediente', {
        ingrediente: `%${ingrediente.toLowerCase()}%`,
      });
    }

    return qb.getMany();
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.pasteisRepository.delete(id);
  }
}
