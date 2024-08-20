import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/mainpages/HomePage';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="bg-fixed bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-5/6 w-full">
        <div className="text-center text-white my-96 text-8xl">hello</div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
