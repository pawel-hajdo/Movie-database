import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {registerUser} from "../API/userManager";

const RegisterForm = () => {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate()

    const handleChangeRoute = () => {
        navigate('/signin');
        window.location.reload();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors || {});
        if (validationErrors) return;

        registerUser(userName, userEmail, userPassword)
            .then(handleChangeRoute)
            .catch(error => {
                const errorMessages = {};
                if((error.response.data).includes('name')){
                    errorMessages.userName = "Account with this username already exists!";
                }
                if((error.response.data).includes('email')){
                    errorMessages.userEmail = "Account with this email already exists!";
                }
                setErrors(errorMessages || {});
                console.log(error.response.data);
            })
    }

    const validate = () => {
        const validationErrors = {};

        if (userName.trim() === '') {
            validationErrors.username = 'Username is required!';
        }
        if (userEmail.trim() === '') {
            validationErrors.email = 'Email is required!';
        }
        if (userPassword.trim() === '') {
            validationErrors.password = 'Password is required!';
        }
        if(userPassword.trim() !== confirmPassword.trim()){
            validationErrors.confirmPassword = 'Password do not match!';
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
                <h2>Create account</h2>
                <div className="form-group mt-2" >
                    <label htmlFor= "inputName">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Enter username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    {errors.username && (
                        <div className="alert alert-danger" style = {{marginTop: 4}}>{errors.username}</div>
                    )}
                </div>
                <div className="form-group mt-2" >
                    <label htmlFor= "inputEmail">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Enter email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    {errors.email && (
                        <div className="alert alert-danger" style = {{marginTop: 4}}>{errors.email}</div>
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
                <div className="form-group mt-2">
                    <label htmlFor="inputConfirmPassword">Re-enter password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && (
                        <div className="alert alert-danger" style = {{marginTop: 4}}>{errors.confirmPassword}</div>
                    )}
                </div>
                <button type="submit" className="btn btn-primary mt-3">Create account</button>
                {errors.userName && (
                    <div className="alert alert-danger" style={{marginTop: 4}}>{errors.userName}</div>
                )}
                {errors.userEmail && (
                    <div className="alert alert-danger" style={{marginTop: 4}}>{errors.userEmail}</div>
                )}
                <div className="form-group d-flex flex-column mt-3">
                    <label htmlFor="createNewAccountButton">Already have an account?</label>
                    <Link to="/signin" className="btn btn-primary" id = "createNewAccountButton">Sign in</Link>
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
export default RegisterForm;