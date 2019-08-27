import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DawnOffer } from '../interfaces/dawn-offer.interface';
import { DawnOfferDTO } from '../dto/dawn-offer.dto';

@Injectable()
export class DawnOfferService {


    constructor(@InjectModel('DawnOffer') private readonly dawnOfferModel: Model<DawnOffer>) { }

    async getAll(): Promise<DawnOfferDTO[]> {
        const dawn = await this.dawnOfferModel.find().exec();
        return dawn;
    }

    async getByType(type: string): Promise<DawnOfferDTO[]> {
        const dawn = await this.dawnOfferModel.find({ type }).exec();
        return dawn;
    }

    async create(createDTO: DawnOfferDTO): Promise<DawnOffer> {
        const newPost = await new this.dawnOfferModel(createDTO);
        return newPost.save();
    }

    async delete(id: string): Promise<DawnOfferDTO> {
        const deletedPost = await this.dawnOfferModel.findOneAndDelete(id);
        return deletedPost;
    }

    async disable(id: string) {
        const dawnOffer = await this.dawnOfferModel.findById(id).exec();
        if (!dawnOffer) {
            throw new NotFoundException('Dawn Offer does not exist!');
        }
        dawnOffer.status = 'disable';
        dawnOffer.save();
        return dawnOffer;
    }

    async active(id: string) {
        const dawnOffer = await this.dawnOfferModel.findById(id).exec();
        dawnOffer.status = 'active';
        dawnOffer.save();
        return null;
    }

    async edit(id, createPostDTO: DawnOfferDTO): Promise<DawnOffer> {
        createPostDTO.status = 'disable';
        const dawnOffer = await this.dawnOfferModel.findByIdAndUpdate(id, createPostDTO, { new: true });
        return dawnOffer;
    }

}
