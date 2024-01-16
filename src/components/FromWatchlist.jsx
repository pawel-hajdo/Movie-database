import React, {useEffect, useState} from "react";
import MovieCard from "./movieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import {decodeToken, isExpired} from "react-jwt";

const FromWatchlist = () => {

    const [moviesFromWatchlist, setMoviesFromWatchlist] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(!isExpired(localStorage.getItem('token')));

    useEffect(() => {
        getMoviesFromWatchlist();
    }, [isLoggedIn]);

    const getMoviesFromWatchlist = () => {
        const token = localStorage.getItem('token');
        const user = decodeToken(token);
        const userId = user?.userId;
        const moviesInWatchlist = JSON.parse(localStorage.getItem(userId + ' watchlist')) || [];
        setMoviesFromWatchlist(moviesInWatchlist);
    }

    return (
        <div style={styles}>
            <h1 style={{color: "#e0e1dd"}}>From your watchlist</h1>
            {isLoggedIn ? (
                <Slider {...settings}>
                    {moviesFromWatchlist.map((movie)=><MovieCard title = {movie.title} image = {movie.image} description = {movie.desc}  id = {movie.id}/>)}
                </Slider>
            ): (
                <div className="d-flex flex-column align-items-center">
                    <p style = {{fontSize: "1.5rem", color:"#778da9"}}>You need to log in to see your watchlist.</p>
                    <Link to="/signin" className="btn btn-primary">Log In</Link>
                </div>
            )}
        </div>
    )
}

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
};

const styles={
    marginTop: "1rem",
    padding: "2rem",
    backgroundColor: "#0d1b2a",
    borderRadius: "25px",
    overflow: "hidden",
}

export default FromWatchlist;