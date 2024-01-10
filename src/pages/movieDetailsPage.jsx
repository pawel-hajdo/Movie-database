import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import {deleteMovie, getMovieDetails} from "../API/movieManager";
import {decodeToken, isExpired} from "react-jwt";
const MovieDetailsPage = () => {

    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const token = localStorage.getItem('token')
    const isLoggedIn = !isExpired(token);
    const user = decodeToken(token);
    const navigate = useNavigate()

    useEffect(() => {
        getMovieDetails(decodeURIComponent(id)).then(setMovieDetails);
    }, [id]);

    const handleDeleteMovie = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this movie?");
        if(confirmDelete){
            deleteMovie(id, token);
            navigate('/');
        }
    }

    return (
        <div style={pageStyles} className="pt-4 pb-4">
            {movieDetails &&
            <div className="card text-bg-dark rounded-lg border-dark" style={cardStyle}>
                <div className="row no-gutters d-flex flex-column h-100">
                    <div className="col-md-2">
                        <img src={movieDetails.image}
                             className="card-img m-3"
                             alt=""
                             style={imageStyle}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{movieDetails.title}</h2>
                            <p className="card-text mt-4">{movieDetails.content}</p>
                        </div>
                    </div>
                    <div className="card-footer d-flex align-items-end flex-row">
                        {isLoggedIn && (
                            <button type="button" className="btn btn-primary m-2">Add to watchlist</button>
                        )}
                        {isLoggedIn && user.isAdmin && (
                            <button type="button" className="btn btn-danger m-2" onClick={handleDeleteMovie}>Delete movie</button>
                        )}
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

const cardStyle = {
    height: "25rem",
    maxWidth: "100rem",
    border: "1px black",
    textDecoration: "none"
}

const imageStyle = {
    flex: "1",
    objectFit: "fill",
    maxHeight: "20rem",
    width: "100%",
};

const pageStyles= {
    paddingLeft: "20rem",
    paddingRight: "20rem",
    backgroundColor: "#1b263b",
    color: "white",
    paddingTop: "2rem"
}
export default MovieDetailsPage;