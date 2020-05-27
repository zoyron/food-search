import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import Recipe from "./components/Recipe";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [foodName, setFoodName] = useState("");
  const [recipes, setRecipes] = useState([]);
  const APP_ID = "5bc39e25";
  const APP_KEY = "465925befdba4cf454f5040cdf81db73";
  const url = `https://api.edamam.com/search?q=${foodName}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getData = async () => {
    console.clear();
    const response = await Axios.get(url);
    setRecipes(response.data.hits);
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
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
};

export default App;
