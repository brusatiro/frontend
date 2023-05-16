import axios from 'axios';

const api = axios.create({
    baseURL: "https://backend-fiap.herokuapp.com/"
    })

export default api;