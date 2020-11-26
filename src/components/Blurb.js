import React from 'react';
import './Blurb.css';
import logo from './pics/maxresdefault.jpg';


const Blurb = () => {
    return (
        <div className="hero">
            <header className="App-header">
                <h1 className="App-title">Welcome to Quarantined Achievements</h1>
                <br/>
                <p>It was easy to lose track of time when every day is spent inside so I made this website to remember what I've done. It's a timelined memorial to every piece of media I've completed since the quarantine has started. Sometimes included are key moments that really left a mark on me. Feel free to explore and maybe you'll find something you'll like too.</p> 
            </header>
        </div>
    );
}

export default Blurb;
