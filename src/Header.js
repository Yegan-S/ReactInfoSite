import React from "react";
import './Page.css';
import reactLogo from "./images/react.png";


export default function Header(){
    return( 
        <div>
         <header>
            <nav className="nav">
                <div className="nav-items">
                <img src={reactLogo}
                 alt="reactlogo" 
                 className="nav-logo" />
                 <h3>ReactFacts</h3>
                <h4>React Course-Project 1</h4> 
            </div>

            </nav>
        </header>
        </div>
    );
}