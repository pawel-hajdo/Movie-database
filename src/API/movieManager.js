import axios from "axios";

const baseURL = "https://at.usermd.net/api";

export const getMovies = () => {
    return axios.get(`${baseURL}/movies`)
        .then(response => {return response.data;})
        .catch((error) => console.log(error));
}