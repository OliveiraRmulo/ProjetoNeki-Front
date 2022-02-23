import axios from "axios";

const api = axios.create({
    baseURL:"https://projeto-nekiback.herokuapp.com/"
})

export default api;