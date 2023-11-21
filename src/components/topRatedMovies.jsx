import React from "react";
import MovieCard from "./movieCard";

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
    {
        title: "The Matrix",
        image: "https://fwcdn.pl/fpo/06/28/628/7685907.3.jpg",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        title: "The Green Mile",
        image: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg",
        desc: "A tale set on death row in a Southern jail, where gentle giant John possesses the mysterious power to heal people's ailments. When the lead guard, Paul, recognizes John's gift, he tries to help stave off the condemned man's execution."
    },
    {
        title: "Inception",
        image: "https://fwcdn.pl/fpo/08/91/500891/7354571.3.jpg",
        desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster."
    },
    {
        title: "Interstellar",
        image: "https://fwcdn.pl/fpo/56/29/375629/7670122.3.jpg",
        desc: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
    },
    {
        title: "Back to the Future",
        image: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        desc: "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown."
    },
]
const TopRatedMovies = () => {

    return (
        <div style={{padding: "1rem"}}>
            <h1 style={{color: "#e0e1dd"}}>Top rated</h1>
            <div className="d-flex flex-row flex-wrap justify-content-center">
                {movies.map((movie)=><MovieCard title = {movie.title} image = {movie.image} description = {movie.desc} />)}
            </div>
        </div>
    )

}

export default TopRatedMovies;