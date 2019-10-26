import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const APP_ID = "8c3ba0d8";
  const APP_KEY = "873422bba2d26b103ece664c1c230fa7";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    console.log("effect");
  }, []);
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
    </div>
  );
};

export default App;
