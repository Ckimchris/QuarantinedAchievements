import React from "react"
import "./Navbar.css"


function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

const Navbar = ({sticky}) => {
    return (
        <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
        <div className="navbar--logo-holder">
            <h1><span class="whiteText">Q</span><span class="goldText">A</span></h1>
        </div>
        <ul className="navbar--link">
            <li className="navbar--link-item" onClick={() => scrollToTop()}>Top</li>
        </ul>
        </nav>
    );
}

export default Navbar;