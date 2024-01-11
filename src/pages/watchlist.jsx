import React, {useEffect, useState} from "react"
import {decodeToken} from "react-jwt";
import MovieCard from "../components/movieCard";

const Watchlist = () => {

    const [moviesFromWatchlist, setMoviesFromWatchlist] = useState([])
    const token = localStorage.getItem('token');
    const user = decodeToken(token);
    const userId = user.userId;

    useEffect(() => {
        getMoviesFromWatchlist();
    }, [userId]);


    const getMoviesFromWatchlist = () => {
        const moviesInWatchlist = JSON.parse(localStorage.getItem(userId + ' watchlist')) || [];
        setMoviesFromWatchlist(moviesInWatchlist);
    }

    return (
        <div style={pageStyles}>
            <h1>Your watchlist</h1>
            <div className="movie-grid pt-4 pb-4" style={movieGridStyles}>
                {moviesFromWatchlist.map((movie, key)=><MovieCard key = {key} title = {movie.title} image = {movie.image} id = {movie.id}/>)}
            </div>
        </div>
    );
}

const pageStyles={
    paddingLeft: "20%",
    paddingRight: "20%",
    backgroundColor: "#1b263b",
    color: "white",
    paddingTop: "2rem"
}

const movieGridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "16px",
};

export default Watchlist

