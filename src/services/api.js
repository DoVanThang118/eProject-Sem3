import axios from "axios";
const BASE_URL = "https://localhost:7045/api/";
const api = axios.create({
    baseURL:BASE_URL,
    // headers: {"Authorization":"Bearer"}
});
export default api;