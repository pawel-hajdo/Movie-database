import React from "react";
import MovieCard from "./movieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecommendedMovies = (props) => {

    const movies = props.movies;

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
    };

    const styles={
        marginTop: "1rem",
        padding: "2rem",
        backgroundColor: "#0d1b2a",
        borderRadius: "25px",
        overflow: "hidden",
    }
    return (
        <div style={styles}>
            <h1 style={{color: "#e0e1dd"}}>Recommended</h1>
            <Slider {...settings}>
                {movies.map((movie)=><MovieCard title = {movie.title} image = {movie.image} description = {movie.content} id = {movie.id}/>)}
            </Slider>
        </div>
    )

}

export default RecommendedMovies;