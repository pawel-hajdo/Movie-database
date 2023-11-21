import Navbar from "./components/navbar";
import {Outlet} from "react-router-dom";
import TopRatedMovies from "./components/topRatedMovies";
import FromWatchlist from "./components/FromWatchlist";
import './App.css';
import Home from "./components/home";
function App() {
  return (
      <div className="container-fluid p-0">
        <Navbar />
        <Home/>
        <div className="container">
          <Outlet />
        </div>
      </div>
  );
}

export default App;
