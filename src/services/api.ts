import axios from 'axios'

// const api = axios.create(
//     {
//         baseURL: "http://localhost:3333",
//         withCredentials: false,
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//         }
//     })


const api = axios.create({
    baseURL: "https://backend-fiap.herokuapp.com/tasks"
    })

export default api;