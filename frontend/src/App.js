
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/common/header';
import Login from './pages/login';
import React from 'react';
import RegTypeSelection from './pages/regTypeSelection';
import RegIndividual from './pages/regIndividual';

function App() {
  return (
    
   <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reg" element={<RegTypeSelection />} />
        <Route path="/regIndividual" element={<RegIndividual />} />

      
      </Routes>
    </Router>
 
  );
}

export default App;
