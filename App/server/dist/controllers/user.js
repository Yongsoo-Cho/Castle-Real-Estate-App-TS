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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.describe = exports.register = exports.login = void 0;
const argon2_1 = __importDefault(require("argon2"));
const user_1 = require("../models/user");
const user_js_1 = require("../utils/user.js");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user;
    user = yield user_1.User.findOne({ email: req.body.email });
    if (!user) {
        res.json({
            token: '',
            error: true
        });
        return;
    }
    const isValid = yield argon2_1.default.verify(user.password, req.body.password);
    if (!isValid) {
        res.json({
            token: '',
            error: true
        });
        return;
    }
    const token = (0, user_js_1.createToken)(user);
    res.json({
        token,
        error: false,
        msg: 'Login successful'
    });
});
exports.login = login;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hasEmail = yield user_1.User.findOne({ email: req.body.email });
    if (hasEmail) {
        res.json({
            token: '',
            error: true,
        });
        return;
    }
    const hashedPassword = yield argon2_1.default.hash(req.body.password);
    const userInfo = {
        email: req.body.email,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    };
    const user = yield new user_1.User(userInfo).save();
    const token = (0, user_js_1.createToken)(user);
    res.json({
        token,
        error: false
    });
});
exports.register = register;
const describe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.User.findOne({ _id: req.body.userId });
    res.json(user);
});
exports.describe = describe;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_1.User.deleteOne({ email: req.body.email });
    res.json({ message: 'User deleted' });
});
exports.deleteUser = deleteUser;
