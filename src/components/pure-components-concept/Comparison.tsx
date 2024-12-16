import React from "react";
import ImpureComponent from "./ImpureComponent.tsx";
import PureComponent from "./PureComponent.tsx";

export default function Comparison() {
    return (
      <>
        <h1>Impure component</h1>
        <ImpureComponent/>
        <br/>
        <h1>Pure component</h1>
        <br/>
        <PureComponent/>
      </>
    );
  }