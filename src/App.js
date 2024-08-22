import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/mainpages/HomePage';
import AboutPage from './components/mainpages/AboutPage';
import ExperiencePage from './components/mainpages/ExperiencePage';
import TetrisPage from './components/projects/Tetris';
import CompilerPage from './components/projects/Compiler';
import KeyRacerPage from './components/projects/KeyRacer';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="bg-fixed bg-gradient-to-r from-slate-900 from-5% via-slate-800 via-50% to-slate-900 to-95% h-5/6 w-full">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/project-tetris" element={<TetrisPage />} />
            <Route path="/project-compiler" element={<CompilerPage />} />
            <Route path="/project-keyracer" element={<KeyRacerPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
