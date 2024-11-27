import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PhoneDetailsPage from "./pages/PhoneDetailsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones/:id" element={<PhoneDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
