import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import CreatePastelDTO from './dto/createPastelDTO';
import GetPastelDTO from './dto/getPastelDTO';
import { PasteisService } from './pasteis.service';

@Controller('pasteis')
export class PasteisController {
  constructor(private readonly pasteisService: PasteisService) {}

  @Post()
  async create(@Body() createPastelDTO: CreatePastelDTO): Promise<void> {
    await this.pasteisService.save(createPastelDTO);
  }

  @Get()
  list(@Query() getPastelDTO: GetPastelDTO) {
    return this.pasteisService.list(getPastelDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() response: Response) {
    const result = await this.pasteisService.delete(+id);

    if (result.affected <= 0) response.sendStatus(404);
    else response.sendStatus(200);
  }
}
