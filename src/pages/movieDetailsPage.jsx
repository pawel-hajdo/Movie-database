import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import {deleteMovie, getMovieDetails} from "../API/movieManager";
import {decodeToken, isExpired} from "react-jwt";
const MovieDetailsPage = () => {

    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const token = localStorage.getItem('token');
    const isLoggedIn = !isExpired(token);
    const user = decodeToken(token);
    const userId = user.userId;
    const navigate = useNavigate()
    const [isInWatchlist, setIsInWatchlist] = useState(false);

    useEffect(() => {
        getMovieDetails(decodeURIComponent(id)).then(setMovieDetails);
        checkWatchlist();
    }, [id, userId]);

    const checkWatchlist = () => {
        const moviesInWatchlist = JSON.parse(localStorage.getItem(userId + ' watchlist')) || [];
        setIsInWatchlist(moviesInWatchlist.some(movie => movie.id === id));
    };
    const handleToggleWatchlist = () => {
        const moviesInWatchlist = JSON.parse(localStorage.getItem(userId + ' watchlist')) || [];
        const movie = { id, image: movieDetails?.image || "" };

        if (isInWatchlist) {
            const updatedWatchlist = moviesInWatchlist.filter(movie => movie.id !== id);
            localStorage.setItem(userId + ' watchlist', JSON.stringify(updatedWatchlist));
        } else {
            moviesInWatchlist.push(movie);
            localStorage.setItem(userId + ' watchlist', JSON.stringify(moviesInWatchlist));
        }

        setIsInWatchlist(!isInWatchlist);
    };

    const handleDeleteMovie = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this movie?");
        if(confirmDelete){
            deleteMovie(id, token);
            navigate('/');
        }
    }

    const getYear = () => {
        return movieDetails.productionYear === undefined ? "no info" : movieDetails.productionYear;
    }

    return (
        <div style={pageStyles} className="pt-4 pb-4">
            {movieDetails &&
            <div className="card text-bg-dark rounded-lg border-dark" style={cardStyle}>
                <div className="row no-gutters">
                    <div className="col-md-2 d-flex flex-column" >
                        <img src={movieDetails.image}
                             className="card-img m-2"
                             alt=""
                             style={imageStyle}
                        />
                        {isLoggedIn && (
                            <button type="button" className={`btn ${isInWatchlist ? "btn-danger" : "btn-primary"} m-2 w-100`} onClick={handleToggleWatchlist}>
                                {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
                            </button>
                        )}
                        {isLoggedIn && user.isAdmin && (
                            <button type="button" className="btn btn-danger m-2 w-100" onClick={handleDeleteMovie}>Delete movie</button>
                        )}
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <h2 className="card-title">{movieDetails.title}</h2>
                            <h6 className="card-subtitle">Publication year: {getYear()}</h6>
                            <p className="card-text mt-4">{movieDetails.content}</p>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

const cardStyle = {
    height: "auto",
    maxWidth: "100%",
    border: "1px black",
    textDecoration: "none"
}

const imageStyle = {
    objectFit: "fill",
    maxHeight: "20rem",
    width: "100%",
};

const pageStyles= {
    paddingLeft: "20%",
    paddingRight: "20%",
    backgroundColor: "#1b263b",
    color: "white",
    paddingTop: "2rem"
}
export default MovieDetailsPage;