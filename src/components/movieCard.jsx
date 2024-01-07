import React, {useState} from "react";
import noImage from "../assets/movieNoImage.png"
import {Link} from "react-router-dom";
const MovieCard = (params) => {

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
    const getId = () => {
        return params.id;
    }

    const cardStyle = {
        height: "15rem",
        scale: isHovered ? "1.1" : "1.00",
        transition: "all ease 0.25s",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        textDecoration: "none",
        boxShadow: "8px 4px 4px rgba(0, 0, 0, 0.3)"
    };

    const imageStyle = {
        flex: "1",
        objectFit: "cover",
        maxHeight: "15rem",
        width: "100%"
    };

    const textContainerStyle = {
        padding: "0.5rem",
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
            <img
                src={getImage()}
                className="img-fluid rounded-start"
                alt="movie cover"
                style={imageStyle}
            />
        </Link>
    )

}

export default MovieCard;