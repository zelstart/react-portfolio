import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import '../../style.css';

// check darkMode value in localStorage and set class on body before component renders
// trying to stop annoying flash of white between page loads
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

function Header() {
  // dark mode
  const h1Ref = useRef();
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  // set dark mode class on body and save darkMode value to localStorage
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // type effect
  useEffect(() => {
    const hasTyped = localStorage.getItem('hasTyped');

    if (!hasTyped) { 
      const typeEffect = (element, speed) => {
        let text = element.innerHTML;
        element.innerHTML = "";
        let i = 0;
        let timer = setInterval(function() {
          if (i < text.length) {
            element.append(text.charAt(i));
            i++;
          } else {
            clearInterval(timer);
          }
        }, speed);
      }

      typeEffect(h1Ref.current, 150); 

      /*
      setTimeout(() => {
        h1Ref.current.classList.add('hide-cursor');
      }, 20000); // hidse the cursor after 20 seconds
      */

      localStorage.setItem('hasTyped', 'true');
    }
  }, []);

  return (
    <header className="header container-fluid d-flex flex-column justify-content-center align-items-center">
      <h1 ref={h1Ref}>hello!</h1>
      <div className='lightswitch' onClick={toggleDarkMode}>
    <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
  </div>
    </header>
  );
}

export default Header;