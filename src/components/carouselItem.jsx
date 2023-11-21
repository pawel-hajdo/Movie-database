import React from "react";
import noImage from "../assets/movieNoImage.png";

const CarouselItem = (params) => {
    const getImage = () => {
        return (params.image === undefined) ? noImage : params.image;
    }
    const getTitle = () => {
        return (params.title === undefined) ? "No title" : params.title;
    }

    const getDescription = () => {
        return params.description === undefined ? "" : params.description;
    };

    const itemStyle = {
        backgroundImage: `url(${getImage()})`,
        backgroundColor: "#0d1b2a",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "50vh", // Dostosuj wysokość do własnych potrzeb
        position: "relative",
    };

    const captionStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#fff", // Kolor tekstu
        textAlign: "center",
    };

    const itemClassName = `carousel-item ${params.isActive ? 'active' : ''}`;

    return (
        <div className={itemClassName}  style={itemStyle}>
        </div>
    )
}

export default CarouselItem;