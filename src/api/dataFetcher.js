import axios, { AxiosResponse } from "axios";

const BASE_URL = 'http://localhost:3000';

export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};
export const fetchItemsDetails = async (item_id) => {
  try {
    const response = await axios.get(`http://localhost:3000/items/${item_id}`);
    return response;
  } catch (error) {
    throw new Error("Error fetching event details");
  }
};
