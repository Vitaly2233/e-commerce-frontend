import axios from "axios";
import { CONFIG } from "../common/config";
import { ILoginResponse } from "../Stores/Interfaces/login-response.interface";
import { ILogin } from "../Stores/Interfaces/login.interface";

axios.defaults.baseURL = CONFIG.SERVER_BASE_URL;

export const loginUser = (data: ILogin) => {
  return axios.post<ILoginResponse>("user/login", data);
};

export const setUpToken = () => {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
};
