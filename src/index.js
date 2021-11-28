import "./index.css";

// import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import CoinApp from "./components/CoinApp";
import Home from "./pages/Home";
// import MovieApp from "./components/MovieApp";
import React from "react";
import ReactDOM from "react-dom";
// import TodoApp from "./components/TodoApp";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <CoinApp /> */}
      {/* <MovieApp /> */}
      {/* <TodoApp /> */}
      <Home />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
