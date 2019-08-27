import { Controller, Get, Res, HttpStatus, Post, Body, Param, Delete, Put, Query, NotFoundException } from '@nestjs/common';
import { DawnOfferService } from './dawn-offer.service';
import { DawnOfferDTO } from '../dto/dawn-offer.dto';
import { ValidateObjectId } from '../shared/pipes/ValidateObjectId';

@Controller('dawn-offer')
export class DawnOfferController {

  constructor(private dawnOfferService: DawnOfferService) { }

  @Get()
  async findAll(@Res() res) {
    const result = await this.dawnOfferService.getAll();
    return res.status(HttpStatus.OK).json(result);
  }

  @Get('/offer')
  async currentOffer(@Res() res) {
    const result = await this.dawnOfferService.getAll();
    return res.status(HttpStatus.OK).json(result);
  }

  @Get(':param')
  async getDawnOfferByType(@Param('param') param: string, @Res() res) {
    const result = await this.dawnOfferService.getByType(param);
    return res.status(HttpStatus.OK).json(result);

  }

  @Post()
  async addDawnOffer(@Res() res, @Body() dawnOfferDTO: DawnOfferDTO) {
    const dawnOffer = await this.dawnOfferService.create(dawnOfferDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Dawn Offer has been created successfully',
      dawnOffer,
    });
  }

  @Delete(':id')
  async deletePost(@Res() res, @Param('id', new ValidateObjectId()) id: string) {
    const deletedDownOffer = await this.dawnOfferService.delete(id);

    if (!deletedDownOffer) {
      throw new NotFoundException('Post does not exist!');
    }

    return res.status(HttpStatus.OK).json({
      message: 'Deleted',
      post: deletedDownOffer,
    });
  }

  @Get('/disable/:id')
  async editDawnOffer(
    @Res() res,
    @Param('id') id: string,
  ) {

    const disabled = await this.dawnOfferService.disable(id);

    return res.status(HttpStatus.OK).json({
      message: 'Post has been successfully updated',
      post: disabled,
    });
  }

}
