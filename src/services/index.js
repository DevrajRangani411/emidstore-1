import axios from "axios";
const baseURL = "http://18.225.26.172:4321/api/v1/";

const user = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    },
});

export default user;