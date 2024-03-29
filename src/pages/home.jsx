import React, {useEffect, useState} from "react";
import FromWatchlist from "../components/FromWatchlist";
import Carousel from "../components/carousel";
import {getMovies} from "../API/movieManager";
import RecommendedMovies from "../components/recommendedMovies";
const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies().then(setMovies)
    }, []);

    return (
        <div style={homeStyle} className="pt-4 pb-4">
            <Carousel movies = {movies.slice(0, 5)}/>
            <RecommendedMovies movies = {movies}/>
            <FromWatchlist/>
        </div>
    )
}

const homeStyle = {
    paddingLeft: "20%",
    paddingRight: "20%",
    backgroundColor: "#1b263b"
}

export default Home;