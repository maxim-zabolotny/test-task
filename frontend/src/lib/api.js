import axios from 'axios'

export const server = {
  url: 'http://localhost:4000',
  header: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
}

export const API = axios.create({
  baseURL: server.url,
})
