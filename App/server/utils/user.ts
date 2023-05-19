import jwt from 'jsonwebtoken';

export const createToken = (user: any) => {
    const tokenSecret = process.env.TOKEN_SECRET ?? '';
    if (!tokenSecret) {
        console.error('TOKEN_SECRET not found in environment variables');
        process.exit(1);
    };
    const token = jwt.sign({user}, tokenSecret, { expiresIn: '3d' });
    return token;
}