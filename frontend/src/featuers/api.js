import axios from "axios";

let baseURL = import.meta.env.VITE_API_DEV_URL;

if (import.meta.env.PROD) {
  baseURL = import.meta.env.VITE_API_PROD_URL;
} else {
  baseURL = import.meta.env.VITE_API_DEV_URL;
}

export const http = axios.create({
  baseURL,
});
