import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import { FaSearch } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import "./navbarStyles.css"
import { isExpired, decodeToken  } from "react-jwt";
import {logoutUser} from "../API/userManager";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {

    const [user, setUser] = useState(decodeToken(localStorage.getItem('token')));

    useEffect(() => {
        setUser(decodeToken(localStorage.getItem('token')));
    }, [isLoggedIn]);

    const handleLogout = () => {
        logoutUser(user.userId);
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        window.location.reload();
    };

    return (
        <nav className="navbar navbar-dark bg-dark" style={{fontSize: "1.5rem"}}>
            <div className="container-fluid d-flex justify-content-center">
                <div className="nav nav-pills" id="pills-tab" role="tablist">
                    <Link to="/" className="nav-item nav-link " id="pills-home-tab" data-toggle="pill" role="tab"
                          aria-controls="pills-home" aria-selected="true">Home</Link>
                    <div className="dropdown">
                        <div className="nav-item nav-link dropdown-toggle" data-bs-toggle="dropdown" id="navbarDarkDropdownMenuLink"
                             aria-controls="pills-home" aria-expanded="false">Films</div>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown"  >
                            <li><Link to = "all" className="dropdown-item d-flex justify-content-center">All films</Link></li>
                            <li><Link to = "top100" className="dropdown-item d-flex justify-content-center" >Top 100</Link></li>
                        </ul>
                    </div>

                </div>
                <div className="flex-row d-flex">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2 mt-1" type="search" placeholder="Search" aria-label="Search" style = {{width:"35rem"}}/>
                    </form>
                    <div className="input-group-append ms-2">
                        <button className="btn btn-primary" type="submit"> <FaSearch /></button>
                    </div>
                </div>
                <div className="nav nav-pills" id="pills-tab" role="tablist">

                    <Link to="/add" className="nav-item nav-link " id="pills-home-tab" data-toggle="pill" role="tab"
                          aria-controls="pills-home" aria-selected="true">
                        <FaPlusSquare/> Add
                    </Link>
                    <Link to="/watchlist" className="nav-item nav-link " id="pills-home-tab" data-toggle="pill" role="tab"
                          aria-controls="pills-home" aria-selected="true">Watchlist
                    </Link>
                    {!isLoggedIn&& (
                        <Link to="/signin" className="nav-item nav-link " id="pills-home-tab" data-toggle="pill" role="tab"
                              aria-controls="pills-home" aria-selected="true">Log in</Link>
                    )}
                    {isLoggedIn && (
                        <div className="dropdown">
                            <div className="nav-item nav-link dropdown-toggle" data-bs-toggle="dropdown" id="navbarDarkDropdownMenuLink"
                                 aria-controls="pills-home" aria-expanded="false">{user.name}</div>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown"  >
                                <li><Link to="/" className="nav-item nav-link " id="pills-home-tab" data-toggle="pill" role="tab"
                                          aria-controls="pills-home" aria-selected="true" onClick={handleLogout}>Log out</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

        </nav>
    )
}

export default Navbar;