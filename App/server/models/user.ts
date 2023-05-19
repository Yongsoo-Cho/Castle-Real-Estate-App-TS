import {Schema, model} from 'mongoose';

interface IUser {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

const userSchema = new Schema<IUser>({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
});

export const User = model<IUser>('User', userSchema);