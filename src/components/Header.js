import React from "react";

import bookLogo from "../images/books.png";
import githubLogo from "../images/github.png";

function Header() {
    return (
        <div className="header">
            <img src={bookLogo} style={{filter: "invert(1)", marginRight: "20px", verticalAlign: "middle"}} alt="A book logo" height="80" width="80"></img>
            <a href="https://yashbellam97.github.io/Personal-Library/" target="blank">
                <img src={githubLogo} style={{float:"right", margin: "20px 0", verticalAlign: "middle"}} alt="GitHub logo" height="50" width="50"></img>
            </a>
            <h1 style={{display: "inline", verticalAlign: "middle", userSelect: "none"}}>Personal Library</h1>
        </div>
    );
}

export default Header;