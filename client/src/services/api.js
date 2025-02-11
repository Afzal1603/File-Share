import axios from "axios";

const API_URL = import.meta.env.PROD ? "https://file-share-8i1y.onrender.com" : "http://localhost:5000";

export const uploadFile = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/upload`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
