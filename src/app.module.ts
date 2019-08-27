import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DawnOfferModule } from './dawn-offer/dawn-offer.module';

@Module({
  imports:
    [
      MongooseModule.forRoot('mongodb+srv://betina:careca@cluster0-z6tgx.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }),
      DawnOfferModule,
    ],
  controllers: [
    AppController,
  ],
  providers: [AppService],
})
export class AppModule { }
