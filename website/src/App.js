import React from 'react';
import bg from './bg.png'
import logo from './logo.png';
import './main.css';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="logo" className="logo"></img>
      <img src={bg} alt="bg" className="bg"></img>
    </div>
  );
}

export default App;
