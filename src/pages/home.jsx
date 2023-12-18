import React from "react";
import TopRatedMovies from "../components/topRatedMovies";
import FromWatchlist from "../components/FromWatchlist";
import Carousel from "../components/carousel";

const homeStyle = {
    paddingLeft: "20rem",
    paddingRight: "20rem",
    backgroundColor: "#1b263b"
}
const Home = () => {
    return (
        <div style={homeStyle}>
            <Carousel/>
            <TopRatedMovies/>
            <FromWatchlist/>
        </div>
    )
}

export default Home;