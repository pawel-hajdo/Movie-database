import React from "react";
import {Link} from "react-router-dom";

const RegisterForm = () => {

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
                <h2>Create account</h2>
                <div className="form-group mt-2" >
                    <label htmlFor= "inputEmail">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="inputPassword">Re-enter password</label>
                    <input type="password" className="form-control" id="inputPassword"/>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Create account</button>
                <div className="form-group d-flex flex-column mt-3">
                    <label htmlFor="createNewAccountButton">Already have an account?</label>
                    <Link to="/login" className="btn btn-primary" id = "createNewAccountButton">Sign in</Link>
                </div>

            </form>
        </div>
    )
}

export default RegisterForm;