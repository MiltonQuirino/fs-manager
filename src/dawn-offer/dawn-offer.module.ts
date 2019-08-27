import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DawnOfferSchema } from '../schema/dawn-offer.schema';
import { DawnOfferController } from './dawn-offer.controller';
import { DawnOfferService } from './dawn-offer.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'DawnOffer', schema: DawnOfferSchema }]),
    ],
    controllers: [
        DawnOfferController,
    ],
    providers: [
        DawnOfferService,
    ],
})
export class DawnOfferModule {

}
