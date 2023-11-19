import React from 'react';
import './Nav.css';
import '../../style.css';

function Nav() {
    return (
        <nav className="container-fluid d-flex flex-column justify-content-center align-items-center">
                <div className='navstuff'>
                    <a className='navlink' href="/">about me</a>
                    <a className='navlink' href="/portfolio">portfolio</a>
                    <a className='navlink' href="#">resume</a>
                    <a className='navlink' href="/contactme">contact me</a>
                </div>
        </nav>
    )


}

export default Nav;