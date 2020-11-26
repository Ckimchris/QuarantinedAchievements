import React, { Component } from 'react';
import Timeline from './components/Timeline';
import Banner from './components/Banner';
import Blurb from './components/Blurb';
import useSticky from './components/useSticky';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const { isSticky, element } = useSticky()
  return (
    <div className="App">
      <Navbar sticky={isSticky}/>
      <div ref={element}>
        <Banner/>
        <Blurb/>
        <Timeline/>
      </div>
    </div>
  );
}


export default App;
