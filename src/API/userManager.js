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