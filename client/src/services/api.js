import axios from "axios";

const API_URL = import.meta.env.PROD ? "/" : "http://localhost:5000/api";

export const uploadFile = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/upload`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
