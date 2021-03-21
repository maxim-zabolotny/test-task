import axios from 'axios'

export const server = {
  url: '/api/products',
}

export const API = axios.create({
  baseURL: server.url,
})
