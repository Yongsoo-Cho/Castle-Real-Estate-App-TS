"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listListing = exports.editListing = exports.describeListing = exports.deleteListing = exports.createListing = void 0;
const listing_1 = require("../models/listing");
const user_1 = require("../models/user");
const createListing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listing = new listing_1.Listing({
        userId: req.body.userId,
        location: req.body.location,
        description: req.body.description,
        price: req.body.price,
        status: req.body.status,
    });
    yield listing.save();
    res.json({ message: 'Listing created' });
});
exports.createListing = createListing;
const deleteListing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield listing_1.Listing.deleteOne({ _id: req.params.id });
    res.json({ message: 'Listing deleted' });
});
exports.deleteListing = deleteListing;
const describeListing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listing = yield listing_1.Listing.findOne({ _id: req.body.id });
    res.json(listing);
});
exports.describeListing = describeListing;
const editListing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idQuery = { _id: req.body.id };
    const updateQuery = { $set: { content: req.body.content } };
    const listing = yield listing_1.Listing.updateOne(idQuery, updateQuery);
    res.json(listing);
});
exports.editListing = editListing;
const listListing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const prefix = ((_a = req.body) === null || _a === void 0 ? void 0 : _a.prefix) || '';
    const listings = yield listing_1.Listing.find({ location: { $regex: prefix, $options: 'i' } });
    for (let i = 0; i < listings.length; i++) {
        const listing = listings[i];
        const user = yield user_1.User.findOne({ _id: listing.userId });
        if (user !== null) {
            listing.userId = user._id.toString();
        }
    }
    res.json(listings);
});
exports.listListing = listListing;
