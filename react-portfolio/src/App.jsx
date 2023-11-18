import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Portfolio from './components/pages/Portfolio/Portfolio';
import ContactMe from './components/pages/ContactMe/ContactMe';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="main-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contactme" element={<ContactMe />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;