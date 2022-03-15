import { Test, TestingModule } from '@nestjs/testing';
import { PasteisController } from './pasteis.controller';

describe('PasteisController', () => {
  let controller: PasteisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasteisController],
    }).compile();

    controller = module.get<PasteisController>(PasteisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
