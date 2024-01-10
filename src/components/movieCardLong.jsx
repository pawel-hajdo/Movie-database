import React, {useState} from "react";
import noImage from "../assets/movieNoImage.png";
import {Link} from "react-router-dom";


const MovieCardLong = (params) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const getImage = () => {
        return (params.image === undefined) ? noImage : params.image;
    }
    const getTitle = () => {
        return (params.title === undefined) ? "No title" : params.title;
    }

    const getDescription = () => {
        return params.description === undefined ? "No description" : params.description;
    };

    const getYear = () => {
        return params.year === undefined ? "no info" : params.year;
    }
    const getId = () => {
        return params.id;
    }

    const cardStyle = {
        scale: isHovered ? "1.03" : "1.00",
        height: "10rem",
        maxWidth: "50rem",
        textDecoration: "none",
        boxShadow: "8px 4px 4px rgba(0, 0, 0, 0.3)"
    }

    const imageStyle = {
        flex: "1",
        objectFit: "fill",
        maxHeight: "10rem",
        width: "100%",
    };


    return (
        <Link to={{
            pathname: `/details/${encodeURIComponent(getId())}`,
        }}
              className="card text-bg-dark rounded-lg m-2 border-dark"
              style={cardStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
        >
            <div className="row no-gutters">
                <div className="col-md-2">
                    <img src={getImage()} className="card-img" alt="" style={imageStyle}/>
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title">{getTitle()}</h5>
                        <h6 className="card-subtitle">{getYear()}</h6>
                        <p className="card-text">{getDescription()}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MovieCardLong;