import React, {useState} from "react";
import noImage from "../assets/movieNoImage.png"
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
    const getTitle = () => {
        return (params.title === undefined) ? "No title" : params.title;
    }

    const getDescription = () => {
        return params.description === undefined ? "" : params.description;
    };

    const cardStyle = {
        height: isHovered ? "30rem" : "15rem",
        transition: "height 0.25s",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
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
        <div
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
            {isHovered && (
                <div style={textContainerStyle}>
                    <h5 className="card-title">{getTitle()}</h5>
                    <p className="card-text">{getDescription()}</p>
                </div>
            )}
        </div>
    )

}

export default MovieCard;