import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import isAuthenticated from './utils/isAuthenticated';
import './App.css';
import DeadPage from './DeadPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage authentication={isAuthenticated()}/>} />
        <Route path="*" element={<DeadPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
