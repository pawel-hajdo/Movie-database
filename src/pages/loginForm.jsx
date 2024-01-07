import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {authUser} from "../API/userManager";

const LoginForm = () => {

    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate()

    const handleChangeRoute = () => {
        navigate('/');
        window.location.reload();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors || {});
        if (validationErrors) return;

        authUser(userLogin, userPassword)
            .then(responseData => {
                localStorage.setItem('token', responseData.token);
                handleChangeRoute();
            })
            .catch(error => {
                 const errorMessages = {};
                 errorMessages.auth = error.response.data;
                 setErrors(errorMessages || {});
                console.log(error.response.data);
            })
    }

    const validate = () => {
        const validationErrors = {};

        if (userLogin.trim() === '') {
            validationErrors.username = 'Login is required!';
        }
        if (userPassword.trim() === '') {
            validationErrors.password = 'Password is required!';
        }
        return Object.keys(validationErrors).length === 0 ? null : validationErrors;
    };

    return (
        <div style={pageStyles} className="pt-4 pb-4">
            <form
                style={formStyles}
                className="d-flex flex-column"
                onSubmit={handleSubmit}
            >
                <h2 >Sign in</h2>
                <div className="form-group mt-2" >
                    <label htmlFor= "inputLogin">Login</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputLogin"
                        placeholder="Enter login"
                        value={userLogin}
                        onChange={(e) => setUserLogin(e.target.value)}
                    />
                    {errors.username && (
                        <div className="alert alert-danger" style = {{marginTop: 4}}>{errors.username}</div>
                    )}
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="inputPassword">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Password"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                    {errors.password && (
                        <div className="alert alert-danger" style = {{marginTop: 4}}>{errors.password}</div>
                    )}
                </div>
                <button type="submit" className="btn btn-primary mt-3">Sign in</button>
                {errors.auth && (
                    <div className="alert alert-danger" style={{marginTop: 4}}>{errors.auth}</div>
                )}
                <div className="form-group d-flex flex-column mt-3">
                    <label htmlFor="createNewAccountButton">New?</label>
                    <Link to="/signup" className="btn btn-primary" id = "createNewAccountButton">Create new account</Link>
                </div>

            </form>
        </div>
    )
}

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

export default LoginForm;