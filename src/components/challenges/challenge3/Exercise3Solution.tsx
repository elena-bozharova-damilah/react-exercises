import React, { useState } from "react";

type ChildProps = {
    handleClick: (color: string) => void;
}

function Child({handleClick}: ChildProps) {
    const [currentColor, setCurrentColor] = useState('');
    
    return (
        <>
        <h1>Child component</h1>
        <input onChange={(e) => setCurrentColor(e.target.value)} type="text" placeholder="Enter color"/>
        <button onClick={() => handleClick(currentColor)}>Change color of parent div</button>
        </>
    );
}

function Parent() {
    const [color, setColor] = useState('green');

    const handleClick = (color: string) => {
        setColor(color);
    }

    return (
        <>
         <div style={{color: color}}>Parent div</div>
         <Child handleClick={handleClick}/>
        </>
    );
}

export default function Exercise3Solution() {
    return (
      <>
      <h2> Final solution</h2>
      <p> we change the color of the parent div by clicking the button in the child component</p>
        <Parent/>
      </>
    )
  }