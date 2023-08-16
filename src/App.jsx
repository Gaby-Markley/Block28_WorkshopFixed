import { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Blue from "./components/blue.jsx";
import Red from "./components/red.jsx";
import Home from "./components/home.jsx";

import "./App.css";

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/blue">Blue </Link>
          <Link to="/red"> Red </Link>
          <Link to="/home">Home </Link>
        </div>
        <h1> Colors </h1>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
