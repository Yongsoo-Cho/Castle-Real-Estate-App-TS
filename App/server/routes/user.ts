import express from 'express';
import {login, register, describe, deleteUser } from '../controllers/user';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/describe', describe);
router.delete('/delete', deleteUser);

module.exports = router;