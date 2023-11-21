import React, {useState} from "react";
import CarouselItem from "./carouselItem";
import CarouselIndicators from "./carouselIndicators";

const movies = [
    {
        title: "JOHN WICK",
        image: "https://fwcdn.pl/fpo/81/44/698144/7653663.3.jpg",
        desc: "An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car."
    },
    {
        title: "Napoleon",
        image: "https://fwcdn.pl/fpo/49/85/864985/8096488.3.jpg",
        desc: "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine."
    },
    {
        title: "The Godfather",
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        desc: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger."
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        desc: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
    },
    {
        title: "Forrest Gump",
        image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        desc: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart."
    },
]


const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

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