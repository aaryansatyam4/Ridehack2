import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './Pages/Landingpage'; // Adjust the import path if necessary

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
