import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Resume from './components/pages/Resume/Resume';
import ContactMe from './components/pages/ContactMe/ContactMe';
import TestingPage from './components/pages/TestingPage/TestingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  return (
    <Router>
      <div className="main-container">
        <div className='header-nav'>
        <Header />
        < Nav />
        </div>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contactme" element={<ContactMe />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

  );
}


export default App;