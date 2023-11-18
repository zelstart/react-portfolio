import React, { useEffect, useRef } from 'react';
import './Header.css';
import '../../style.css';

function Header() {
  const h1Ref = useRef();

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

      typeEffect(h1Ref.current, 150); // runs the effect on page load

      // setTimeout(() => {
      //   h1Ref.current.classList.add('hide-cursor');
      // }, 20000); // hides the cursor after 20 seconds

      localStorage.setItem('hasTyped', 'true');
    }
  }, []); // stops the effect from running on every render

  return (
    <header className="header container-fluid d-flex flex-column justify-content-center align-items-center">
      <h1 ref={h1Ref}>hello!</h1>
    </header>
  );
}

export default Header;