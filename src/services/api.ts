import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nlw-proffy-server.herokuapp.com'
})


export default api