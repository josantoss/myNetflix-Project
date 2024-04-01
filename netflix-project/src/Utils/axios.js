import axios from "axios";

const instance = axios.create({
    baseURL: "http://image.tmdb.org/t/p/",
});

export default instance;
