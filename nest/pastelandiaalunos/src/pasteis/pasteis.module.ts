import { Module } from '@nestjs/common';
import { PasteisService } from './pasteis.service';
import { PasteisController } from './pasteis.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pastel } from './entities/pastel.entity';
import { Ingrediente } from './entities/ingrediente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pastel, Ingrediente])],
  providers: [PasteisService],
  controllers: [PasteisController],
})
export class PasteisModule {}
