import axios from "axios";

// in production there is no localhost so we can set baseURL accordingly

const BASE_URL = import.meta.env.MODE === "development" ? "htt[.//localhost:5001/api" : "/api";

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;