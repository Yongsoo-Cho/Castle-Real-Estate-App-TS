import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import isAuthenticated from './utils/isAuthenticated';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage authentication={isAuthenticated()}/>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
