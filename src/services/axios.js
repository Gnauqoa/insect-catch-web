import axios from "axios";

export const axiosForInsertCatchAPI = axios.create({
  baseURL: "https://insert-catch.onrender.com",
});
