import Navbar from "./components/navbar";
import {Outlet} from "react-router-dom";
import MovieList from "./components/movieList";
function App() {
  return (
      <div className="container-fluid p-0">
        <Navbar />
          <MovieList/>
        <div className="container">
          <Outlet />
        </div>
      </div>
  );
}

export default App;
