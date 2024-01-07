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
            <div className="card text-bg-dark rounded-lg m-2 border-dark" style={cardStyle}>
                <div className="row no-gutters">
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
                            <p className="card-text mt-4" >{movieDetails.content}</p>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

const cardStyle = {
    height: "20rem",
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