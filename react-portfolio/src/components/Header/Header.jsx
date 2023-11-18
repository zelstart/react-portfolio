import React from 'react';
import './Header.css';
import '../../style.css';

function Header() {
  return (
    <header className="header">
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <div>
          <h1>Zel Start</h1>
        </div>
        <div>
          <nav>
            <a href="/">about me</a>
            <a href="/portfolio">portfolio</a>
            <a href="#">resume</a>
            <a href="/contactme">contact me</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;