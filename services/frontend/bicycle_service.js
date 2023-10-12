import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchBicycles = async () => {
  return await axios.get(API_URL);
};

export const createBicycle = async (body) => {
  return await axios.post(API_URL, body);
};

export const deleteBicycle = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};