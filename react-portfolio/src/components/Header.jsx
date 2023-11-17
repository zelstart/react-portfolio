



import React, { useState, useEffect } from 'react';

function Header() {
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    let lastScrollTop = 0;

    useEffect(() => {
      function handleScroll() {
        let st = window.scrollY || document.documentElement.scrollTop;
        if (st > lastScrollTop){
            setIsScrollingDown(true);
        } else if (st < lastScrollTop) {
            setIsScrollingDown(false);
        }
        // set lastScrollTop equal to the current scroll position
        lastScrollTop = st <= 0 ? 0 : st;
    }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
      <header className="header">
          <div className={`header-content ${isScrollingDown ? 'hide' : 'show'}`}>
              <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
                  <div>
                      <h1>hello!</h1>
                  </div>
              </div>
          </div>
          <div>
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