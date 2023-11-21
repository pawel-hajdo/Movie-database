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
        width: isHovered ? "20rem" : "10rem",
        height: "15rem",
        transition: "width 0.25s",
        display: "flex",
        flexDirection: "row", // Ustawienie układu w poziomie
        overflow: "hidden",
    };

    const textContainerStyle = {
        flex: "1", // Elastyczność dla kontenera tekstu
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
                style={{flex: "1"}}
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