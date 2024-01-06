import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {getMovieDetails} from "../API/movieManager";
const MovieDetailsPage = () => {

    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        getMovieDetails(decodeURIComponent(id)).then(setMovieDetails);
    }, [id]);

    return (
        <div style={pageStyles}>
            {movieDetails &&
            <div className="card mb-3" style={cardStyle}>
                <div className="row no-gutters">
                    <div className="col-md-2">
                        <img src={movieDetails.image} className="card-img" alt="" style={imageStyle}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{movieDetails.title}</h5>
                            <p className="card-text">{movieDetails.content}</p>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

const cardStyle = {
    height: "10rem",
    maxWidth: "100rem",
    border: "1px black",
    textDecoration: "none"
}

const imageStyle = {
    flex: "1",
    objectFit: "fill",
    maxHeight: "10rem",
    width: "100%",
};

const pageStyles={
    paddingLeft: "20rem",
    paddingRight: "20rem",
    backgroundColor: "#1b263b",
    color: "white",
    paddingTop: "2rem"
}

export default MovieDetailsPage;