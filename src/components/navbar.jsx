import React from "react";
import {Link} from "react-router-dom"
import { FaSearch } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import "./navbarStyles.css"
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid d-flex justify-content-center">
                <div className="nav nav-pills" id="pills-tab" role="tablist">
                    <Link to="/home" className="nav-item nav-link " id="pills-home-tab" data-toggle="pill" role="tab"
                          aria-controls="pills-home" aria-selected="true">Home</Link>
                    <Link to="#" className="nav-item nav-link dropdown-toggle" data-bs-toggle="dropdown" id="navbarDarkDropdownMenuLink" role="button"
                          aria-controls="pills-home" aria-expanded="false">Films</Link>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarScrollingDropdown" >
                        <li><Link to = "all" className="dropdown-item d-flex justify-content-center">All films</Link></li>
                        <li><Link to = "top100" className="dropdown-item d-flex justify-content-center" >Top 100</Link></li>
                    </ul>
                </div>
                <div className="flex-row d-flex">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style = {{width:"35rem"}}/>
                    </form>
                    <div className="input-group-append ms-2">
                        <button className="btn btn-primary" type="submit"> <FaSearch /></button>
                    </div>
                </div>
                <div className="nav nav-pills" id="pills-tab" role="tablist">

                    <Link to="/watchlist" className="nav-item nav-link " id="pills-home-tab" data-toggle="pill" role="tab"
                          aria-controls="pills-home" aria-selected="true">
                        <FaPlusSquare/> Watchlist
                    </Link>
                    <Link to="/login" className="nav-item nav-link " id="pills-home-tab" data-toggle="pill" role="tab"
                          aria-controls="pills-home" aria-selected="true">Log in</Link>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;