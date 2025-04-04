import React from 'react';
import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SpheresSection from './components/SpheresSection';
import StrengthsSection from './components/StrengthsSection';
import RecentProjectsSection from './components/RecentProjectsSection';
import CallToActionSection from './components/CallToActionSection';
import ExperienceSection from './components/ExperienceSection';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <SpheresSection />
                <StrengthsSection />
                <RecentProjectsSection />
                <CallToActionSection />
                <ExperienceSection />
              </>
            }
          />
          <Route path="/about" element={<div>Обо мне</div>} />
          <Route path="/portfolio" element={<div>Портфолио</div>} />
          <Route path="/stages" element={<div>Этапы работы</div>} />
          <Route path="/tariffs" element={<div>Тарифы</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
