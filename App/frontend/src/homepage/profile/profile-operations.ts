import axios from 'axios';
import { API_URL } from '../../constants';


export const describeUser = async (id?: string) => {
    const response = await axios.post(`${API_URL}/user/describe`, { userId: id });
    console.log({userId: id});

    return response.data;
};