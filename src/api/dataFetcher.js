import axios, { AxiosResponse } from "axios";

//const BASE_URL = process.env.BASE_URL;
const BASE_URL = 'http://localhost:3000'

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
    const response = await axios.get(`${BASE_URL}/items/${item_id}`);
    return response;
  } catch (error) {
    throw new Error("Error fetching event details");
  }
};
export const fetchOrderDetails = async (order_id) => {
  try {
    const response = await axios.get(`${BASE_URL}/orders/${order_id}`);
    return response;
  } catch (error) {
    throw new Error("Error fetching event details");
  }
};
export const createItem = async (newDataItem) => {
  try {
    const response = await axios.post(`${BASE_URL}/items/`, newDataItem);
    return response.data;
  } catch (error) {
    throw new Error("Error creating data");
  }
};
export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${BASE_URL}/orders/`, orderData);
    return response.data;
  } catch (error) {
    throw new Error("Error creating order");
  }
};

export async function fetchTravelingOrdersReport(startDate, endDate) {
  try {
    const url = `${BASE_URL}/reports/traveling?start_date=${startDate}&end_date=${endDate}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching traveling orders report");
  }
}

