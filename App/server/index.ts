import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();
const app = express();

const DB_URI = process.env.DB_URI ?? '';
if (!DB_URI) {
    console.error('DB_URI not found in environment variables');
    process.exit(1);
};

async function connectToDatabase() {
    try {
        await mongoose.connect(DB_URI);
        console.log('Connected to database');
    }
    catch (err) {
        console.error(err);
    }
}

connectToDatabase();

app.use(bodyParser.json());
app.use(cors());

app.use('/user', require('./routes/user'));
app.use('/listing', require('./routes/listing'));

const port = 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});