import { Routes, Route, BrowserRouter, Outlet, Link } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import SearchResults from "./pages/SearchResults";
import VendorDashboard from "./pages/VendorDashboard";
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/searchresults" element={<SearchResults />} />
        <Route path="/vendordashboard" element={<VendorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
