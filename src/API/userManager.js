import axios from "axios";

const baseURL = "https://at.usermd.net/api/user";

export const registerUser = (name, email, password) => {
    return axios.post(`${baseURL}/create`,{
        name: name,
        email: email,
        password: password
    })
        .then(response => {return response.data})
        .catch(error => {throw error})
}

export const authUser = (login, password) => {
    return axios.post(`${baseURL}/auth`,{
        login: login,
        password: password
    })
        .then(response => {return response.data})
        .catch(error => {throw error})
}