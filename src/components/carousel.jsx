import React, {useState} from "react";
import CarouselItem from "./carouselItem";
import CarouselIndicators from "./carouselIndicators";

const Carousel = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const movies = props.movies;
    const handleIndicatorClick = (index) => {
        setActiveIndex(index);
    };

    const carouselStyle = {
        borderRadius: "25px",
        overflow: "hidden",
    };

    return (
        <div id="carousel" className="carousel slide carousel-fade pt-2" data-bs-ride="carousel" style={carouselStyle}>
            <CarouselIndicators
                itemCount={movies.length}
                activeIndex={activeIndex}
                onClick={handleIndicatorClick}
            />
            <div className="carousel-inner">
                {movies.map((movie, index)=>
                    <CarouselItem
                        key={index}
                        title = {movie.title}
                        image = {movie.image}
                        id = {movie.id}
                        isActive={index === 0}
                    />
                )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;