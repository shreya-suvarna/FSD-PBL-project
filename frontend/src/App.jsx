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
import PreBook from "./pages/PreBooks";
import BookResidue from "./pages/BookResidue";
import FarmerBookings from "./pages/FarmerBookings";
import IndustryOrders from "./pages/IndustryOrders";
import Uploadedlist from "./pages/Uploadedlist";
import Profile from "./pages/Profile";
import IndustryProfile from "./pages/IndustryProfile";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/login-selection" element={<Loginselection />} />
      <Route path="/farmer-signin" element={<Farmersignin />} />
      <Route path="/farmer-signup" element={<Farmersignup />} />
      <Route path="/industry-signin" element={<Industrysignin />} />
      <Route path="/industry-signup" element={<Industrysignup />} />
      <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
      <Route path="/industry-dashboard" element={<IndustryDashboard />} />
      <Route path="/add-crop-residue" element={<AddCropResidue />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/alerts" element={<Alerts />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/government-schemes" element={<GovernmentSchemes />} />
      <Route path="/search-residue" element={<SearchResidue/>}/>
      <Route path="/pre-book" element={<PreBook/>}/>
      <Route path="/book-residue/:id" element={<BookResidue/>}/>
      <Route path="/farmer-bookings" element={<FarmerBookings/>}/>
      <Route path="/industry-orders" element={<IndustryOrders/>}/>
      <Route path="/uploaded-list" element={<Uploadedlist />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/industry-profile" element={<IndustryProfile />} />
      <Route path="/about-us" element={<AboutUs />} />



      </Routes>
    // <p>hello</p>
  );
}

export default App;
