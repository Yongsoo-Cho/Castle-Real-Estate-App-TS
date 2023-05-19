import {Schema, model} from 'mongoose';

interface IListing {
    userId: string;
    
    location: string;
    description: string;
    price: number;
    status: string;
}

const listingSchema = new Schema<IListing>({
    userId: String,
    location: String,
    description: String,
    price: Number,
    status: String,
});

export const Listing = model<IListing>('Listing', listingSchema);