import React from "react";
import noImage from "../assets/movieNoImage.png";
import {Link} from "react-router-dom";

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
        height: "50vh",
        position: "relative"
    };

    const captionStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#fff",
        textAlign: "center",
    };

    const itemClassName = `carousel-item ${params.isActive ? 'active' : ''}`;

    return (
        <Link to={{
            pathname: `/details/${encodeURIComponent(params.id)}`,
        }}>
            <div className={itemClassName} style={itemStyle}>
            </div>
        </Link>
    )
}

export default CarouselItem;