import { create } from "zustand";
import { IErrorResponse } from "../common/interfaces/error-response.interface";
import { loginUser, setUpToken } from "../Requests";
import { AxiosError } from "axios";

type UserStore = {
  email: string;
  password: string;
  token: string;

  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  sendData: (email: string, password: string) => Promise<void>;
};

const useUserStore = create<UserStore>((set) => ({
  email: "",
  password: "",
  token: "",
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  sendData: async (email: string, password: string) => {
    try {
      const response = await loginUser({
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      setUpToken();
      set(() => ({ email: "", password: "", token: response.data.token }));
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorResponse = error.response?.data as IErrorResponse;
        alert(errorResponse.errors);
      }
    }
  },
}));

export default useUserStore;
