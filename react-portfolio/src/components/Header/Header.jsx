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
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  // adds a text typing effect to the h1 element whenever the user first visits the page
  useEffect(() => {
    const hasTyped = sessionStorage.getItem('hasTyped');
    if (!hasTyped && h1Ref.current) { 
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
            sessionStorage.setItem('hasTyped', 'true');
          }
        }, speed);
      }
    
      typeEffect(h1Ref.current, 125);
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