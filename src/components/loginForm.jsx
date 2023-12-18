import React from "react";
import {Link} from "react-router-dom";

const LoginForm = () => {

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


    return (
        <div style={pageStyles} className="pt-3">
            <form style={formStyles} className="d-flex flex-column" >
                <h2 >Sign in</h2>
                <div className="form-group mt-2" >
                    <label htmlFor= "inputEmail">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text" style={{color: "#e0e1dd"}}>We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Sign in</button>
                <div className="form-group d-flex flex-column mt-3">
                    <label htmlFor="createNewAccountButton">New?</label>
                    <Link to="/signup" className="btn btn-primary" id = "createNewAccountButton">Create new account</Link>
                </div>

            </form>
        </div>
    )
}

export default LoginForm;