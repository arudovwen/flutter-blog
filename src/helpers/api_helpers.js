import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const axios = setupCache(Axios);

//apply base url for axios
const API_URL = process.env.VUE_APP_API_URL;

const axiosApi = axios.create({
  baseURL: API_URL,
});

// Get method call
export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config });
}

// Post method call
export async function post(url, data, config = {}) {
  return axiosApi.post(url, { ...data }, { ...config });
}

// Put method call
export async function put(url, data, config = {}) {
  return axiosApi.put(url, { ...data }, { ...config });
}

// Delete method call
export async function del(url, config = {}) {
  return await axiosApi.delete(url, { ...config });
}
