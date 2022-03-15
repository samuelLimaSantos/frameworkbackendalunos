import { Test, TestingModule } from '@nestjs/testing';
import { PasteisService } from './pasteis.service';

describe('PasteisService', () => {
  let service: PasteisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasteisService],
    }).compile();

    service = module.get<PasteisService>(PasteisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
