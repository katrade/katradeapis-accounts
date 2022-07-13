import { API_BASE_URL } from './../constants/index';
import axios from "axios";

export const ApiAxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
})