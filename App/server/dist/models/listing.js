"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listing = void 0;
const mongoose_1 = require("mongoose");
const listingSchema = new mongoose_1.Schema({
    userId: String,
    location: String,
    description: String,
    price: Number,
    status: String,
});
exports.Listing = (0, mongoose_1.model)('Listing', listingSchema);
