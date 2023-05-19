import {Request, Response} from 'express';
import argon2 from 'argon2';
import { User }from '../models/user';
import { createToken } from '../utils/user.js';

export const login = async (req: Request, res: Response) => {
    let user;
    user = await User.findOne({ email: req.body.email });
    if (!user) {
        res.json({
            token: '',
            error: true
        });
        return;
    }

    const isValid = await argon2.verify(user.password, req.body.password);
    if (!isValid) {
        res.json({
            token: '',
            error: true
        });
        return;
    }

    const token = createToken(user);
    res.json({
        token,
        error: false,
        msg: 'Login successful'
    });
}

export const register = async (req: Request, res: Response) => {
    const hasEmail = await User.findOne({ email: req.body.email });

    if (hasEmail) {
        res.json({
            token: '',
            error: true,
        });
        return;
    }

    const hashedPassword = await argon2.hash(req.body.password);
    const userInfo = {
        email: req.body.email,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    };

    const user = await new User(userInfo).save();
    const token = createToken(user);

    res.json({
        token,
        error: false
    });
};

export const describe = async (req: Request, res: Response) => {
    const user = await User.findOne({ _id: req.body.userId }); 
    res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
    await User.deleteOne({ email: req.body.email });
    res.json({ message: 'User deleted' });
};