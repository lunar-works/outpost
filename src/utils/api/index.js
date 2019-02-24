import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:4000/api/v0/',
    withCredentials: true,
    crossDomain: true,
    headers: {
        'Content-Type': 'application/json'
    }
  })