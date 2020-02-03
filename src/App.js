import React from 'react';
import bg from './bg.png'
import logo from './logo.png';
import './main.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>HackXR 2020</title>
      </Helmet>
      <div className="container">
        <img src={logo} alt="logo" className="logo"></img>
        <img src={bg} alt="bg" className="bg"></img>
      </div>
    </>
  );
}

export default App;
