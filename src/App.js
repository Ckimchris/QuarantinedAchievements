import React, { Component } from 'react';
import {Timeline} from "./components/image-timeline";
import Banner from './components/Banner';
import Blurb from './components/Blurb';
import useSticky from './components/useSticky';
import Navbar from './components/Navbar';

function App() {
  const { isSticky, element } = useSticky()
  return (
    <div className="App">
      <Navbar sticky={isSticky}/>
      <div ref={element}>
        <Banner/>
        <Blurb/>
        <Timeline reverse={true}/>
        <Blurb/>
      </div>
    </div>
  );
}


export default App;
