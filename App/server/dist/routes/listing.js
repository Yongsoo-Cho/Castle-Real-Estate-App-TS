"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listing_1 = require("../controllers/listing");
const router = express_1.default.Router();
router.post('/create', listing_1.createListing);
router.delete('/:id', listing_1.deleteListing);
router.get('/describe', listing_1.describeListing);
router.post('/edit', listing_1.editListing);
router.post('/list', listing_1.listListing);
module.exports = router;
