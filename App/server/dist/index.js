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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const DB_URI = (_a = process.env.DB_URI) !== null && _a !== void 0 ? _a : '';
if (!DB_URI) {
    console.error('DB_URI not found in environment variables');
    process.exit(1);
}
;
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(DB_URI);
            console.log('Connected to database');
        }
        catch (err) {
            console.error(err);
        }
    });
}
connectToDatabase();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('/user', require('./routes/user'));
app.use('/listing', require('./routes/listing'));
const port = 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
