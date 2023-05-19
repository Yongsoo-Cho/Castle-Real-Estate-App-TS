"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const router = express_1.default.Router();
router.post('/login', user_1.login);
router.post('/register', user_1.register);
router.post('/describe', user_1.describe);
router.delete('/delete', user_1.deleteUser);
module.exports = router;
