import React from "react";
import noImage from "../assets/movieNoImage.png";


const MovieCardLong = (params) => {

    const getImage = () => {
        return (params.image === undefined) ? noImage : params.image;
    }
    const getTitle = () => {
        return (params.title === undefined) ? "No title" : params.title;
    }

    const getDescription = () => {
        return params.description === undefined ? "" : params.description;
    };

    const getYear = () => {
        return params.year === undefined ? "" : params.year;
    };

    const cardStyle = {
        height: "10rem",
        maxWidth: "50rem",
        border: "1px black"
    }

    const imageStyle = {
        flex: "1",
        objectFit: "fill",
        maxHeight: "10rem",
        width: "100%",
    };

    return (
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
    )
}

export default MovieCardLong;