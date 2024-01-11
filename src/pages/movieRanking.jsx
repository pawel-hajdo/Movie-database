import React, {useEffect, useState} from "react";
import MovieCardLong from "../components/movieCardLong";
import SortInput from "../components/sortInput";
import {getMovies} from "../API/movieManager";

const MovieRanking = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies().then(setMovies)
    }, []);

    const handleSortChange = (selectedOption) => {
        switch (selectedOption){
            case "title-asc":
                setMovies((prevMovies) => [...prevMovies].sort((a, b) => a.title.localeCompare(b.title)));
                break;
            case "title-desc":
                setMovies((prevMovies) => [...prevMovies].sort((a, b) => b.title.localeCompare(a.title)));
                break;
            case "year-asc":
                setMovies((prevMovies) => [...prevMovies].sort((a, b) => a.productionYear - b.productionYear));
                break;
            case "year-desc":
                setMovies((prevMovies) => [...prevMovies].sort((a, b) => b.productionYear - a.productionYear));
                break;
            case "default":
                break;
            default:
                break;
        }
    }

    return (
        <div style={pageStyles}>
            <h1>Movies ranking</h1>
            <div className={"d-flex flex-row pt-4 pb-4"}>
                <div style={divStyles}>
                    {movies.map((movie, key)=><MovieCardLong key = {key} title = {movie.title} image = {movie.image} description = {movie.content} id = {movie.id} year = {movie.productionYear}/>)}
                </div>
                <div style={{marginTop: "1rem", paddingLeft: "4rem"}}>
                    <SortInput
                        options={[
                            { value: "title-asc", label: "Title Ascending" },
                            { value: "title-desc", label: "Title Descending" },
                            { value: "year-asc", label: "Year Ascending" },
                            { value: "year-desc", label: "Year Descending" }
                        ]}
                        onSortChange={handleSortChange}
                    />
                </div>
            </div>
        </div>
    )
}

const pageStyles={
    paddingLeft: "20%",
    paddingRight: "20%",
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