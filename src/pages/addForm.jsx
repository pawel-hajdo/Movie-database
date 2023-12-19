import React, {useState} from "react";
import {Link} from "react-router-dom";

const AddForm = () => {

    const [movieTitle, setMovieTitle] = useState("");
    const [movieCover, setMovieCover] = useState(null);
    const [description, setDescription] = useState("");
    const [releaseYear, setReleaseYear] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setMovieCover(file);

    const handleSubmit = (e) => {
    }
    }

    const resetForm = () => {
        setMovieTitle("");
        setMovieCover(null);
        setDescription("");
        setReleaseYear("");
    };

    return (
        <div style={pageStyles} className="pt-3">
            <form
                style={formStyles}
                className="d-flex flex-column"
                //onSubmit={handleSubmit}
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
                    <label htmlFor="inputMovieCover">Movie cover</label>
                    <input
                        type="file"
                        className="form-control"
                        id="inputMovieCover"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="inputDescription">Description</label>
                    <textarea
                        className="form-control"
                        id="inputDescription"
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="inputReleaseYear">Release year</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputReleaseYear"
                        placeholder="Enter release year"
                        value={releaseYear}
                        onChange={(e) => setReleaseYear(e.target.value)}
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
    paddingLeft: "45rem",
    paddingRight: "45rem",
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