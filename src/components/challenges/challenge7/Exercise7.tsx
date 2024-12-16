import React, { useState } from "react";


function App() {
    const sections = [
        {
            title: "Section 1",
            items: [
                { name: "Item 1.1", details: "Details of Item 1.1" },
                { name: "Item 1.2", details: "Details of Item 1.2" },
            ],
        },
        {
            title: "Section 2",
            items: [
                { name: "Item 2.1", details: "Details of Item 2.1" },
                { name: "Item 2.2", details: "Details of Item 2.2" },
            ],
        },
    ];

    return (
        <div className="app">
            <h1>Multi-Level Accordion</h1>
            <div>Starting point...</div>
        </div>
    );
}

export default function Exercise7() {
    return (
        <>
            <h1>Exercise 7: Multi-Level Accordion</h1>
            <p>Goal: Create a multi-level accordion where clicking on a section displays more information, and the state is managed at the top level.</p>
            <p>Description:</p>
            <ul>
                <li>Create an Accordion component that receives data for multiple sections.</li>
                <li>Each section contains a title and a list of items. When a section is clicked, the items for that section should expand or collapse.</li>
                <li>Each item in the list should display a nested Details component when clicked, showing more information.</li>
            </ul>
            <p>Structure:</p>
            <pre>
App
 └── Accordion
      └── Section (repeated for each section)
           └── Item (repeated for each item in a section)
                └── Details
            </pre>
            <p>Props Propagation:</p>
            <ul>
                <li>App passes section data to Accordion.</li>
                <li>Accordion passes individual section data to Section.</li>
                <li>Section passes individual item data to Item.</li>
                <li>Item passes data to Details.</li>
            </ul>
            <p>State Management:</p>
            <ul>
                <li>The open/close state of each section is managed in the Accordion component and passed as props.</li>
                <li>The open/close state of each item's details is managed in the Section component and passed as props.</li>
            </ul>
            <App />
        </>
    );
}
