import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './Pages/Landingpage'; // Adjust the import path if necessary
import Plans from './Pages/Plans';
import Shop from './Pages/Shop';
import Cloth from './Pages/Cloth';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
		<Route path="/plan" element={<Plans />} />
		<Route path="/shop" element={<Shop />} />
    <Route path="/cloth" element={<Cloth />} />
      </Routes>
    </Router>
  );
};

export default App;
