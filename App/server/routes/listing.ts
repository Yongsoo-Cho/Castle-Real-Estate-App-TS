import express from 'express';
import {createListing, deleteListing, describeListing, editListing, listListing, listListingByUser, updateListingStatus  } from '../controllers/listing';

const router = express.Router();

router.post('/create', createListing);
router.delete('/:id', deleteListing);
router.get('/describe', describeListing);
router.post('/edit', editListing);
router.post('/list', listListing);
router.post('/listByUser', listListingByUser);
router.post('/updateListingStatus', updateListingStatus);

module.exports = router;