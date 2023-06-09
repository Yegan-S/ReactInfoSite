import React from "react";
import './Page.css';

export default function MainContent(){
    return(
        <div className="MainContent">
            <h1 className="">Fun facts about React</h1>

    <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
        </div>
    );
}