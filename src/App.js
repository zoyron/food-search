import React from "react";
import "./App.css";

const App = () => {
  const APP_ID = "5bc39e25";
  const APP_KEY = "465925befdba4cf454f5040cdf81db73";
  const url = `"https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"`;
  return (
    <div className="App">
      <h1>Food Searching App</h1>
    </div>
  );
};

export default App;
