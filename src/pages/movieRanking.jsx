import React, {useEffect, useState} from "react";
import MovieCardLong from "../components/movieCardLong";
import SortInput from "../components/sortInput";
import {getMovies} from "../API/movieManager";

const MovieRanking = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies().then(setMovies)
    }, []);

    return (
        <div style={pageStyles}>
            <h1>Movies ranking</h1>
            <div className={"d-flex flex-row pt-3"}>
                <div style={divStyles}>
                    {movies.map((movie)=><MovieCardLong title = {movie.title} image = {movie.image} description = {movie.content} id = {movie.id}/>)}
                </div>
                <div style={{marginTop: "1rem", paddingLeft: "4rem"}}>
                    <SortInput
                        options={[
                            { value: "title-asc", label: "Title Ascending" },
                            { value: "title-desc", label: "Title Descending" },
                        ]}
                        defaultOption="title-asc"
                        //onSortChange={handleSortChange}
                    />
                </div>
            </div>
        </div>
    )
}

const pageStyles={
    paddingLeft: "20rem",
    paddingRight: "20rem",
    backgroundColor: "#1b263b",
    color: "white",
    paddingTop: "2rem"
}

const divStyles = {
    marginTop: "1rem",
    padding: "2rem",
    backgroundColor: "#0d1b2a",
    borderRadius: "25px",
    overflow: "hidden",
}
export default MovieRanking;