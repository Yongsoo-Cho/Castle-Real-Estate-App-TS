import axios from 'axios';
import { API_URL } from '../../../constants';

interface RegisterRequestBody {
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

export const register = async (body: RegisterRequestBody) => {
    const response = await axios.post(`${API_URL}/user/register`, body)
    const { data } = response;

    if (data.token !== ''){
        window.localStorage.setItem("token", data.token);
    }

    return data;
}