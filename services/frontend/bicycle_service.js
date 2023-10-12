import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchBicycles = async () => {
  console.log(API_URL);
  return await axios.get(API_URL);
};

export const createBicycle = async (body) => {
  console.log(API_URL);
  return await axios.post(API_URL, body);
};