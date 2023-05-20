import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/api"
    // baseURL: process.env.REACT_APP_API_URL
    // baseURL: "https://your-pet-by-it-kotiki.onrender.com/"
});
const setToken =(token) => {
    if(token) {
        return  instance.defaults.headers.common.authorization = `Bearer ${token}`;
    }
    instance.defaults.headers.common.authorization = "";
}

export const register = async(data) => {
    const {data: result} = await instance.post("/auth/register", data);
    setToken(result.token);
    return result
}

export const login = async(data) => {
    const {data: result} = await instance.post("/auth/login", data);
   setToken(result.token);
    return result;
}

export const logout = async() => {
    const data = await instance.post("/auth/logout");
   setToken();
    return data;
}

export default instance;