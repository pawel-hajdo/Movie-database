import React, {useEffect, useState} from "react"
import {decodeToken} from "react-jwt";
import MovieCard from "../components/movieCard";

const Watchlist = () => {

    const [moviesFromWatchlist, setMoviesFromWatchlist] = useState([])
    const [movieToRemove, setMovieToRemove] = useState(null);
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

    const handleRemoveMovie = (movieId) => {
        const updatedWatchlist = moviesFromWatchlist.filter(
            (movie) => movie.id !== movieId
        );
        setMoviesFromWatchlist(updatedWatchlist);
        localStorage.setItem(userId + " watchlist", JSON.stringify(updatedWatchlist));
        setMovieToRemove(null);
    };

    return (
        <div style={pageStyles}>
            <h1>Your watchlist</h1>
            <div className="movie-grid pt-4 pb-4" style={movieGridStyles}>
                {moviesFromWatchlist.map((movie, key)=>
                    <div
                        key={key}
                        className="position-relative"
                        onMouseEnter={() => setMovieToRemove(movie.id)}
                        onMouseLeave={() => setMovieToRemove(null)}
                    >
                        <MovieCard
                            title={movie.title}
                            image={movie.image}
                            id={movie.id}
                        />
                        {movieToRemove === movie.id && (
                            <button
                                className="btn btn-danger position-absolute bottom-0 start-0 end-0"
                                style={{ opacity: 0.8, borderRadius: "0 0 8px 8px", scale: "1.02" }}
                                onClick={() => handleRemoveMovie(movie.id)}
                            >
                                Remove
                            </button>
                        )}
                    </div>
                )}
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

