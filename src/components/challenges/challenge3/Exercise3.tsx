import React, { useState } from "react";
import Exercise3Solution from "./Exercise3Solution.tsx";
import { Link } from "react-router-dom";

type ChildProps = {
    handleClick: (color: string) => void;
}

function Child({handleClick}: ChildProps) {
    return (
        <>
        <h1>Child component</h1>
        <input type="text" placeholder="Enter color"/>
        <button>Change color of parent div</button>
        </>
    );
}

function Parent() {
    const [color, setColor] = useState('green');

    return (
        <>
         <div style={{color: color}}>Parent div</div>
         <Child handleClick={() => {}}/>
        </>
    );
}

export default function Exercise3() {
    return (
      <>
      <h2> The aim of this exercise is to practice calling event handlers from parent in child components</h2>
      <p> change the color of the parent div by clicking the button in the child compoennt</p>
      <p>The idea is to make the hardcoded 'green' value adjustable</p>
      <p>We need to insert valid HTML color values in the input for thsi to work</p>
        <Parent/>

        <br/>
        <h1>See final solution here:</h1>
        <Link to="/exercise/3/solution">Solution</Link>
      </>
    )
  }