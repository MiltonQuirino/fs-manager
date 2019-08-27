import { Document } from 'mongoose';

export interface DawnOffer extends Document {
    status: string;
    readonly start: Date;
    readonly end: Date;
    readonly type: string;
    readonly url: string;
    readonly content: string;
    readonly createdAt: Date;
    readonly updateAt: Date;

}
