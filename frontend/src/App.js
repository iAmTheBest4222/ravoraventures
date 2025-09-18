import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FocusAreas from './pages/FocusAreas';
import OurApproach from './pages/OurApproach';
import ForStartups from './pages/ForStartups';
import ForInvestors from './pages/ForInvestors';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ProgramDetails from './pages/ProgramDetails';
import Ravorav from './pages/Ravorav';

// Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/focus" element={<FocusAreas />} />
            <Route path="/approach" element={<OurApproach />} />
            <Route path="/startups" element={<ForStartups />} />
            <Route path="/investors" element={<ForInvestors />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
              <Route path="/program-details" element={<ProgramDetails />} />
              <Route path="/ravorav" element={<Ravorav />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;