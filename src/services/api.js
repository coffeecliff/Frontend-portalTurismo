import axios from "axios";

const api = axios.create({
    baseURL: 'https://backend-portalturismo-9v5w.onrender.com/api'
})

export default api;