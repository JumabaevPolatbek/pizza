import React from "react";
import { Link } from 'react-router-dom'
import Ingredients from "./Ingredients/Ingredients";
import './Pizza.css'

function Pizza() {
    return (
        <div className="container">
            <header>
                    <nav className="header_nav">
                        <Link to={"/"}>Build your pizza</Link>
                        <Link to={"/"}>Ingredients</Link>
                    </nav>
            </header>
            <main>
                    <Ingredients/>
            </main>
        </div>
    )
}

export default Pizza;