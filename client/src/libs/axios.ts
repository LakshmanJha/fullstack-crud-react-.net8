import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5033/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
