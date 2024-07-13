type EnvConfig = {
  AUTH_SERVICE_URL: string
  USER_SERVICE_URL: string
}

export const CONFIG: EnvConfig = {
  AUTH_SERVICE_URL: 'http://localhost:3002',
  USER_SERVICE_URL: 'http://localhost:3000',
}
