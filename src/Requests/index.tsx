import axios from 'axios'
import { ILoginResponse } from './Interfaces/login-response.interface'
import { ILogin } from './Interfaces/login.interface'
import { IUserResponse } from './Interfaces/user-response.interface'
import { ServiceTypeEnum } from './Interfaces/service-type.enum.ts'
import { CONFIG } from '../common/config.ts'

export const setUpTokenToAxios = (token: string) => {
  axios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${token}`
      return config
    },
    (error) => Promise.reject(error),
  )
}

const getServiceUrl = (service: ServiceTypeEnum) => {
  switch (service) {
    case ServiceTypeEnum.AUTH_SERVICE:
      return CONFIG.AUTH_SERVICE_URL
    case ServiceTypeEnum.USER_SERVICE:
      return CONFIG.USER_SERVICE_URL
  }
}

export const loginUser = (data: ILogin) => {
  return axios.post<ILoginResponse>(`${getServiceUrl(ServiceTypeEnum.AUTH_SERVICE)}/login`, data)
}

export const getCurrentUser = () => {
  return axios.get<IUserResponse>(`${getServiceUrl(ServiceTypeEnum.USER_SERVICE)}/me`)
}
