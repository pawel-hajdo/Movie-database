import Navbar from "./components/navbar";
import {Outlet} from "react-router-dom";
import TopRatedMovies from "./components/topRatedMovies";
import FromWatchlist from "./components/FromWatchlist";
function App() {
  return (
      <div className="container-fluid p-0">
        <Navbar />
          <TopRatedMovies/>
          <FromWatchlist/>
        <div className="container">
          <Outlet />
        </div>
      </div>
  );
}

export default App;
