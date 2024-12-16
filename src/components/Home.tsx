import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <h1>React getting started:</h1>
        <ul className="list">
          <li>Example of <Link to="/impure-components">Impure components vs pure components</Link> </li>
          <li>Example of <Link to="/rendering-lists">Rendering lists</Link> </li>
        </ul>
        <h1>Exercises:</h1>
        <ul className="list">
          <li><Link to="/exercise/1">Exercise 1</Link></li>
          <li><Link to="/exercise/2">Exercise 2</Link></li>
          <li><Link to="/exercise/3">Exercise 3</Link></li>
          <li><Link to="/exercise/4">Exercise 4</Link></li>
          <li><Link to="/exercise/5">Exercise 5</Link></li>
          <li><Link to="/exercise/6">Exercise 6</Link></li>
          <li><Link to="/exercise/7">Exercise 7</Link></li>
        </ul>
      </div>
    );
  }
  
  export default Home;