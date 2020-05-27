import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

const App = () => {
  const [foodName, setFoodName] = useState("");
  const APP_ID = "5bc39e25";
  const APP_KEY = "465925befdba4cf454f5040cdf81db73";
  const url = `https://api.edamam.com/search?q=${foodName}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getData = async () => {
    console.clear();
    const response = await Axios.get(url);
    for (
      let i = 0;
      i < response.data.hits[0].recipe.ingredientLines.length;
      i++
    )
      console.log(response.data.hits[0].recipe.ingredientLines[i]);
    // console.log(response);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    getData();
    setFoodName("");
  };

  const onChange = (e) => {
    setFoodName(e.target.value);
  };
  return (
    <div className="App">
      <h1>Food Searching App</h1>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="search food"
          autoComplete="off"
          onChange={onChange}
          value={foodName}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
};

export default App;
