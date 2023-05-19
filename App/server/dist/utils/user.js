"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (user) => {
    var _a;
    const tokenSecret = (_a = process.env.TOKEN_SECRET) !== null && _a !== void 0 ? _a : '';
    if (!tokenSecret) {
        console.error('TOKEN_SECRET not found in environment variables');
        process.exit(1);
    }
    ;
    const token = jsonwebtoken_1.default.sign({ user }, tokenSecret, { expiresIn: '3d' });
    return token;
};
exports.createToken = createToken;
