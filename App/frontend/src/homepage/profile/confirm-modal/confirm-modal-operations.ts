import axios from "axios";
import { API_URL } from '../../../constants';

export const deleteListing = async (id?: string) => {
    const response = await axios.delete(`${API_URL}/listing/${id}`);
    return response.data;
};