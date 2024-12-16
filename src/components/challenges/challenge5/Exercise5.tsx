import React from "react";
import "./style.css"

type CarProps = {
    // TODO: add the props needed for a car following the given objects
}

function Car() {
}

type CarListProps = {
    cars: CarProps[];
}

function CarList() {
}

function Container() {
    return (
        <>
        <h1>Available cars</h1>
        <div className="car-item">
            <p>Car: Toyota</p>
            <p>Model: Corolla</p>
            <p>Year: 2021</p>
        </div>
        <div className="car-item">
            <p>Car: Honda</p>
            <p>Model: Civic</p>
            <p>Year: 2020</p>
        </div>
        <div className="car-item">
            <p>Car: Ford</p>
            <p>Model: Fusion</p>
            <p>Year: 2019</p>
        </div>
        </>
    );
}

export default function Exercise5() {
    return (
      <>
      <h1> The aim of this exercise is to practice keeping the code clean</h1>
        <p>There is one component rendering a list of cars and their attributes</p>
        <p>Create a constant list of car objects</p>
        <p>Create a car component and CardList component and render the same code</p>
        <Container/>
      </>
    )
  }