import axios from 'axios'

export const THHP = axios.create({
  baseURL: 'http://localhost:8000/api/v1/'
})
