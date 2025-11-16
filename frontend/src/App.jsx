// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome"
import Loginselection from './pages/Loginselection';
import Farmersignin from './pages/Farmersignin';
import Farmersignup from './pages/Farmersignup';
import FarmerDashboard from './pages/FarmerDashboard';
import Industrysignin from "./pages/Industrysignin";
import Industrysignup from './pages/Industrysignup';
import IndustryDashboard from './pages/IndustryDashboard';
import AddCropResidue from "./pages/AddCropResidue";
import Sales from "./pages/Sales";
import Alerts from "./pages/Alerts";
import Payments from "./pages/Payments";
import GovernmentSchemes from "./pages/GovernmentSchemes";
import SearchResidue from "./pages/SearchResidue";
import PreBook from "./pages/PreBook";
import IndustryAlerts from "./pages/IndustryAlerts.jsx";
import IndustryPayments from "./pages/IndustryPayments";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/login-selection" element={<Loginselection />} />
      <Route path="/farmer-signin" element={<Farmersignin />} />
      <Route path="/farmer-signup" element={<Farmersignup />} />
      <Route path="/Industry-signin" element={<Industrysignin />} />
      <Route path="/Industry-signup" element={<Industrysignup />} />
      <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
      <Route path="/industry-dashboard" element={<IndustryDashboard />} />
      <Route path="/add-crop-residue" element={<AddCropResidue />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/alerts" element={<Alerts />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/government-schemes" element={<GovernmentSchemes />} />
       <Route path="/search-residue" element={<SearchResidue />} />
        <Route path="/pre-book" element={<PreBook />} />
        <Route path="/industry-alerts" element={<IndustryAlerts />} />
        <Route path="/industry-payments" element={<IndustryPayments />} />
      
      </Routes>
      
    // <p>hello</p>
  );
}

export default App;
