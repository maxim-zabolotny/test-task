import axios from 'axios'

export const server = {
  url: 'http://localhost:4000',
}

export const API = axios.create({
  baseURL: server.url,
})
