import React from 'react';

const Header = () => (
  <header className="App-header">
    <h1 className="App-title">Droidify</h1>
    <h1 className="App-title" id="bad">Build-a-Droid</h1>
    <div className="nav">
      <p className="nav-item">Shop:</p>
      <a className="nav-item" href="#">Andriods</a>
      <a className="nav-item" href="#">Implants</a>
      <a className="nav-item" href="#">Prosthetics</a>
    </div>
  </header>
);

export default Header;