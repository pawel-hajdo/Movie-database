import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/home";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import MovieRanking from "./components/movieRanking";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path = "/" element = {<App />}>
                <Route index element={<Home/>}/>
                <Route path = "signin" element={<LoginForm/>}/>
                <Route path = "signup" element={<RegisterForm/>}/>
                <Route path = "all" element={<MovieRanking/>}/>
                <Route path = "details"/>
                <Route path = "add"/>
              </Route>
          </Routes>

      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
