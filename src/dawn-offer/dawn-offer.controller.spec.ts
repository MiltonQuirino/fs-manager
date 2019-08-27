import { Test, TestingModule } from '@nestjs/testing';
import { DawnOfferController } from './dawn-offer.controller';

describe('DawnOffer Controller', () => {
  let controller: DawnOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DawnOfferController],
    }).compile();

    controller = module.get<DawnOfferController>(DawnOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
