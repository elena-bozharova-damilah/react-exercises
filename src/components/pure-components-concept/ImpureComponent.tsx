import React from "react";

let guest = 0;

// calling this component multiple times will produce different JSX! 
function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function ImpureComponent() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}