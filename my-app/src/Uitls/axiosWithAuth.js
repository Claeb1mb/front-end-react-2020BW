import axios from "axios"


// axios authorization 
export const axiosWithAuth = () => {
    const token = window.localStorage.getItem("token");
    return axios,create({
        headers: {
            authorization: token,
        },
        baseURL:""
    });
}