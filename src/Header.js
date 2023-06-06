import React from "react";
import './Page.css';

export default function Header(){
    return( 
        <div>
         <header>
            <nav className="nav">
                <img src="./react.jpg" alt="reactimg" className="nav-logo" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </nav>
        </header>
        </div>
    );
}