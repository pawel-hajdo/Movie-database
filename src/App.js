import Navbar from "./components/navbar";
import {Outlet} from "react-router-dom";
import './App.css';
function App() {
  return (
      <div className="container-fluid p-0">
        <Navbar />
          <Outlet />
      </div>
  );
}

export default App;
