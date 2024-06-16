import axios from "axios";
import { CONFIG } from "../common/config";
import { ILoginResponse } from "./Interfaces/login-response.interface";
import { ILogin } from "./Interfaces/login.interface";
import { IUserResponse } from "./Interfaces/user-response.interface";

axios.defaults.baseURL = CONFIG.SERVER_BASE_URL;

export const setUpTokenToAxios = (token: string) => {
  axios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );
};

export const loginUser = (data: ILogin) => {
  return axios.post<ILoginResponse>("user/login", data);
};

export const getCurrentUser = () => {
  return axios.get<IUserResponse>("user/me");
};
