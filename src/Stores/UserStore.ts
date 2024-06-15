import { create } from "zustand";
import { IErrorResponse } from "../common/interfaces/error-response.interface";
import { getCurrentUser, loginUser, setUpTokenToAxios } from "../Requests";
import { AxiosError } from "axios";

type UserStore = {
  id?: number;
  email: string;
  password: string;
  token?: string;

  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  sendData: (email: string, password: string) => Promise<void>;
  setToken: (token?: string) => void;
  checkToken: () => Promise<void>;
};

const useUserStore = create<UserStore>((set, get) => ({
  id: undefined,
  email: "",
  password: "",
  token: "",
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setToken: (token) => {
    if (token) {
      localStorage.setItem("token", token);
      setUpTokenToAxios(token);
    }
    set({ token });
  },
  sendData: async (email: string, password: string) => {
    try {
      const response = await loginUser({
        email,
        password,
      });
      const token: string = response.data.token;

      get().setToken(token);

      set(() => ({ email: "", password: "" }));
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorResponse = error.response?.data as IErrorResponse;
        alert(errorResponse.errors);
      }
    }
  },
  checkToken: async () => {
    const token = get().token;
    const id = get().id;

    if (!token || !id) return;
    try {
      await getCurrentUser(id);
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useUserStore;
