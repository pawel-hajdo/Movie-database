import React, {useEffect, useState} from "react";
import FromWatchlist from "../components/FromWatchlist";
import Carousel from "../components/carousel";
import {getMovies} from "../API/movieManager";
import RecommendedMovies from "../components/recommendedMovies";

const homeStyle = {
    paddingLeft: "20rem",
    paddingRight: "20rem",
    backgroundColor: "#1b263b"
}
const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies().then(setMovies)
    }, []);

    return (
        <div style={homeStyle}>
            <Carousel movies = {movies.slice(0, 5)}/>
            <RecommendedMovies movies = {movies}/>
            <FromWatchlist/>
        </div>
    )
}

export default Home;