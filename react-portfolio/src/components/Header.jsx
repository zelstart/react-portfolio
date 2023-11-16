import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <h1>Zel Start</h1>
        <nav>
          <a href="/">about me</a>
          <a href="/portfolio">portfolio</a>
          <a href="#">resume</a>
          <a href="/contactme">contact me</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;