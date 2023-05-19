import axios from 'axios';
import { API_URL } from '../../../constants';

interface LoginRequestBody {
    email: string;
    password: string;
};

export const login = async (body: LoginRequestBody) => {
    const response = await axios.post(`${API_URL}/user/login`, body);
    const { data }  = response;

    console.log("cock")

    if(!data.error) {
        window.localStorage.setItem("token", data.token);
    }

    return data;
};