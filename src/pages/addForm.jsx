import React, {useState} from "react";
import {postMovie} from "../API/movieManager";

const AddForm = () => {

    const [movieTitle, setMovieTitle] = useState("");
    const [movieCover, setMovieCover] = useState("");
    const [movieYear, setYear] = useState("");
    const [movieDescription, setMovieDescription] = useState("");

    const handleSubmit = (e) => {
        postMovie(movieTitle, movieCover, movieDescription, movieYear);
    }

    const resetForm = () => {
        setMovieTitle("");
        setMovieCover("");
        setYear("");
        setMovieDescription("");
    };

    return (
        <div style={pageStyles} className="pt-4 pb-4">
            <form
                style={formStyles}
                className="d-flex flex-column"
                onSubmit={handleSubmit}
            >
                <h2>Add movie</h2>
                <div className="form-group mt-2">
                    <label htmlFor="inputMovieTitle">Movie title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputMovieTitle"
                        placeholder="Enter movie title"
                        value={movieTitle}
                        onChange={(e) => setMovieTitle(e.target.value)}
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="inputMovieCover">Movie Cover</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputMovieCover"
                        placeholder="Enter link to movie cover"
                        value={movieCover}
                        onChange={(e) => setMovieCover(e.target.value)}
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="inputMovieYear">Year</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputMovieTitle"
                        placeholder="Enter publication year"
                        value={movieYear}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="inputDescription">Description</label>
                    <textarea
                        className="form-control"
                        id="inputDescription"
                        placeholder="Enter description"
                        rows="10"
                        value={movieDescription}
                        onChange={(e) => setMovieDescription(e.target.value)}
                    />
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <button type="submit" className="btn btn-primary">
                        Add Movie
                    </button>
                    <button type="button" className="btn btn-danger" onClick={resetForm}>
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
};

const pageStyles = {
    paddingLeft: "35%",
    paddingRight: "35%",
    backgroundColor: "#1b263b",
    color: "white"
}

const formStyles = {
    padding: "2rem",
    backgroundColor: "#0d1b2a",
    borderRadius: "25px",
    overflow: "hidden",
}

export default AddForm;