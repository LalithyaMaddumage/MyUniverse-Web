
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/common/header';
import Login from './pages/login';
import React from 'react';
import RegTypeSelection from './pages/regTypeSelection';
import RegIndividual from './pages/regIndividual';
import RegCompany from './pages/regCompany';
import HeaderAndNav from './components/common/headerAndNav';
import CompanyProfileForm from './components/layout/companyProfileForm';
import MessageIcon from './components/elements/messageIcon';
import BusinessAccountDetails from './pages/businessAccountDetails';
import Dashboard from './pages/dashboard';
import Packages from './pages/packages';
import Cards from './components/elements/cards';
import PopUpMessage from './components/elements/popUpMessage';
import MessangingPage from './pages/messangingPage';

function App() {
  return (
    
   <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reg" element={<RegTypeSelection />} />
        <Route path="/regIndividual" element={<RegIndividual />} />
        <Route path="/regCompany" element={<RegCompany />} />
        <Route path="/nav" element={<HeaderAndNav />} />
        {/* <Route path="/companyProfile" element={<CompanyProfileForm />} /> */}
        <Route path="/companyProfile" element={<BusinessAccountDetails />} />
        {/* <Route path="/msg" element={<MessageIcon />} /> */}
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/pack" element={<Packages />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/pop" element={<PopUpMessage />} />
        <Route path="/msg" element={<MessangingPage/>} />



      
      </Routes>
    </Router>
 
  );
}

export default App;
