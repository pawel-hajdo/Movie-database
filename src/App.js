import Navbar from "./components/navbar";
import {Outlet} from "react-router-dom";
import './App.css';
import Footer from "./components/footer";
function App() {
  return (
      <div className="container-fluid p-0">
        <Navbar />
          <Outlet />
        <Footer/>
      </div>
  );
}

export default App;
