import React from "react";
import "./App.css";
import Axios from "axios";

const App = () => {
  const APP_ID = "5bc39e25";
  const APP_KEY = "465925befdba4cf454f5040cdf81db73";
  const url = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getData = async () => {
    const response = await Axios.get(url);
    for (
      let i = 0;
      i < response.data.hits[0].recipe.ingredientLines.length;
      i++
    )
      console.log(response.data.hits[0].recipe.ingredientLines[i]);
    // console.log(response);
  };
  return (
    <div className="App">
      <h1 onClick={getData}>Food Searching App</h1>
    </div>
  );
};

export default App;
