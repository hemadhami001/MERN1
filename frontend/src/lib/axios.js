import axios from "axios";

// in production there is no localhost so we can set baseURL accordingly

const api = axios.create({
    baseURL: "http://localhost:5001/api",
});

export default api;