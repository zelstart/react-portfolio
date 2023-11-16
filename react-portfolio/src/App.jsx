import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import ContactMe from './components/pages/ContactMe';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactme" element={<ContactMe />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;