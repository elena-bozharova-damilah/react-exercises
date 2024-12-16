import React, { useState } from "react";

type ProductProps = {
    id: number;
    name: string;
    price: number;
};

function App() {
    const [cart, setCart] = useState<ProductProps[]>([]);
 
    const products = [
        { id: 1, name: "Product 1", price: 29.99 },
        { id: 2, name: "Product 2", price: 19.99 },
        { id: 3, name: "Product 3", price: 39.99 },
    ];

    return (
        <div className="app">
            <h1>E-Commerce Product Viewer</h1>
            <div>Starting point...</div>
        </div>
    );
}

export default function Exercise6() {
    return (
        <>
            <h1>Exercise 6: E-Commerce Product Viewer</h1>
            <p>Goal: Build a simple e-commerce product viewer where data about products propagates from a parent component to deeply nested child components.</p>
            <p>At the end we should have a button for every product to add it in the cart</p>
            <p>Description:</p>
            <ul>
                <li>Create a ProductList component that displays a list of products.</li>
                <li>Each product should be passed down as props to a Product component, which displays the product's name, price, and an "Add to Cart" button.</li>
                <li>When the "Add to Cart" button is clicked, the selected product should be sent back to a Cart component, which displays all items in the cart.</li>
            </ul>
            <App />
        </>
    );
}
