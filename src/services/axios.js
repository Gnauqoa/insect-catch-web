import axios from "axios";

export const axiosForInsertCatchAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
