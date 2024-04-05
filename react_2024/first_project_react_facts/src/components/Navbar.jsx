import React from "react";
import reactLogo from "../assets/react.svg"

function Navbar(){
    return (
        <nav>
            <img src={reactLogo} alt="react-logo" width="50px" />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar;