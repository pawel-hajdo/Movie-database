import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="jumbotron d-flex flex-column align-items-center" style={pageStyles}>
            <h1 className="display-4">404 - Not found!</h1>
            <p className="lead">Page you are looking for does not exist.</p>
            <p>Go back to Home</p>
            <Link className="btn btn-primary btn-lg" to="/" role="button">Home</Link>
        </div>
    );
};

const pageStyles={
    paddingLeft: "35%",
    paddingRight: "35%",
    backgroundColor: "#1b263b",
    color: "white",
    paddingTop: "2rem",
    paddingBottom: "2rem"
}
export default NotFound;