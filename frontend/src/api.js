import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = 'https://f7e1a4e2-5005-4115-8e43-e170525b6645-dev.e1-eu-north-azure.choreoapis.dev/reactdjangoyeah/backend/v1'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl

})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api