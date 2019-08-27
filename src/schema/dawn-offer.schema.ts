import * as mongoose from 'mongoose';

export const DawnOfferSchema = new mongoose.Schema({
    start: Date,
    end: Date,
    type: String,
    url: String,
    content: String,
    createdAt: { type: Date, default: Date.now },
    updateAt: Date,
    status: String,
});
