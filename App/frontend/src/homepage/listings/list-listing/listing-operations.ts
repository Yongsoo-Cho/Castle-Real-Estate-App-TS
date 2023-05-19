import axios from "axios";
import {API_URL} from "../../../constants";

interface IListing {
    userId: string;
    location: string;
    description: string;
    price: number;
    status: string;
}
interface IListingList {
    prefix: string;
}

export const createListing = async (body: IListing) => {
    const response = await axios.post(`${API_URL}/listing/create`, body);

    return response.data;
}

// export const listListings = async (body: IListingList) => {
//     const response = await axios.get(`${API_URL}/listing/list`, body);
//     return response.data;
// };
export const listListings = async (body: IListingList) => {
    const response = await axios.post(`${API_URL}/listing/list/`, body);
    return response.data;

  };