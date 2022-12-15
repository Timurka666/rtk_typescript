import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Favourites from './pages/Favourites';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Navbar />
      <div className="mt-[1.5rem] content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
