import React from 'react';
import bg from './bg.png'
import logo from './logo.png';
import './main.css';
import MetaTags from 'react-meta-tags';


function App() {
  return (
    <>
      <MetaTags>
        <title>HackXR 2020</title>
        <meta name="description" content="HackXR 2020 website." />
        <meta property="og:title" content="HackXR 2020" />
        <meta property="og:image" content="./favicon.png" />
      </MetaTags>
      <div className="container">
        <img src={logo} alt="logo" className="logo"></img>
        <img src={bg} alt="bg" className="bg"></img>
      </div>
    </>
  );
}

export default App;
