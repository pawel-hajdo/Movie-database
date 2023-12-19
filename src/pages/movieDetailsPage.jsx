import React from "react";
import {useLocation, useParams} from 'react-router-dom';
const MovieDetailsPage = () => {

    const { title } = useParams();
    const location = useLocation();
    const params = location.state;

    const getImage = () => (params && params.image) ? params.image : "Brak obrazu";
    const getTitle = () => (title) ? decodeURIComponent(title) : "Brak tytułu";
    const getDescription = () => (params && params.description) ? params.description : "Brak opisu";

    return (
        <div style={pageStyles}>
            <div className="card mb-3" style={cardStyle}>
                <div className="row no-gutters">
                    <div className="col-md-2">
                        <img src={getImage()} className="card-img" alt="" style={imageStyle}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{getTitle()}</h5>
                            <p className="card-text">{getDescription()}</p>
                        </div>
                    </div>
                </div>
            </div>
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