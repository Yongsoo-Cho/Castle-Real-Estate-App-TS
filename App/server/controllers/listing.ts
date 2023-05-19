import { Listing } from '../models/listing';
import { User } from '../models/user';
import { Request, Response } from 'express';

export const createListing = async (req: Request, res: Response) => {
    const listing = new Listing({
        userId: req.body.userId,

        location: req.body.location,
        description: req.body.description,
        price: req.body.price,
        status: req.body.status,
    });

    await listing.save();

    res.json({ message: 'Listing created' });
};

export const deleteListing = async (req: Request, res: Response) => {
    await Listing.deleteOne({ _id: req.params.id });
    res.json({ message: 'Listing deleted' });
};

export const describeListing = async (req: Request, res: Response) => {
    const listing = await Listing.findOne({ _id: req.body.id });
    res.json(listing);
};

export const editListing = async (req: Request, res: Response) => {
    const idQuery = { _id: req.body.id };
    const updateQuery = { $set: { content: req.body.content } };

    const listing = await Listing.updateOne(idQuery, updateQuery);
    res.json(listing);
};

export const listListing = async (req: Request, res: Response) => {
    const prefix = req.body?.prefix || '';

    const listings = await Listing.find({ location: { $regex: prefix, $options: 'i' } });

    for (let i=0; i<listings.length; i++) {
        const listing = listings[i];
        const user = await User.findOne({ _id: listing.userId });
        if (user !== null){
            listing.userId = user._id.toString();
        }
    }

    res.json(listings);
};