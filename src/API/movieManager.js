import axios from "axios";

const baseURL = "https://at.usermd.net/api";

export const getMovies = () => {
    return axios.get(`${baseURL}/movies`)
        .then(response => {return response.data;})
        .catch(error => console.log(error));
}

export const getMovieDetails = (movieId) => {
    return axios.get(`${baseURL}/movies/${movieId}`)
        .then(response => {return response.data})
        .catch(error => console.log(error));
}

export const postMovie = (title, image, content) => {
    axios.post(`${baseURL}/movies`,{
        title: title,
        image: image,
        content: content
    }).then(response => {console.log(response)})
        .catch(error => console.log(error))
}

export const deleteMovie = (movieId) => {
    axios.delete(`${baseURL}/movie/${movieId}`,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': ' application/json',
            'x-auth-token': localStorage.getItem('token')
    }})
        .then(response => {console.log(response)})
        .catch(error => console.log(error))
}