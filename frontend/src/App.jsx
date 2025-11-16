// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome"
import Loginselection from './pages/Loginselection';
import Farmersignin from './pages/Farmersignin';
import Farmersignup from './pages/Farmersignup';
import FarmerDashboard from './pages/FarmerDashboard';
import Industrysignin from "./pages/Industrysignin";
import Industrysignup from './pages/Industrysignup';

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
    </Routes>
    // <p>hello</p>
  );
}

export default App;
