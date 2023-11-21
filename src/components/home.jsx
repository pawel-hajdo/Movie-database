import React from "react";
import TopRatedMovies from "./topRatedMovies";
import FromWatchlist from "./FromWatchlist";

const homeStyle = {
    paddingLeft: "20rem",
    paddingRight: "20rem",
    backgroundColor: "#1b263b"
}
const Home = () => {
    return (
        <div style={homeStyle}>
            <TopRatedMovies/>
            <FromWatchlist/>
        </div>
    )
}

export default Home;