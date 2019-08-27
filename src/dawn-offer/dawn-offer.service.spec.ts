import { Test, TestingModule } from '@nestjs/testing';
import { DawnOfferService } from './dawn-offer.service';

describe('DawnOfferService', () => {
  let service: DawnOfferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DawnOfferService],
    }).compile();

    service = module.get<DawnOfferService>(DawnOfferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
