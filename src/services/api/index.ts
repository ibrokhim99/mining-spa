import axios from "axios"

import { deleteAccessToken } from "@/lib/deleteAccessToken"
import { getAccessToken } from "@/lib/getAccessToken"

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
})

http.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token.value}`
      return config
    }
    return config
  },
  (error) => Promise.reject(error),
)

http.interceptors.response.use(
  (config) => {
    return config
  },
  (error) => {
    if (error?.response?.status === 401) {
      deleteAccessToken()
      window.location.reload()
    }

    throw error
  },
)

export default http

export const str_api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
})
