import { Routes, Route, BrowserRouter, Outlet, Link } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import SearchResults from "./pages/SearchResults";

import "./App.css";
import medContext from "./components/context";
import AllMeds from "./pages/viewall";
import { useState } from "react";
import VendorDashboard from "./pages/VendorDashboard";

const App = () => {
  const searchedMed = useState([]);
  return (
    <BrowserRouter>

      <medContext.Provider value={searchedMed}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/searchresults" element={<SearchResults />} />
          <Route path="/product" element={<AllMeds />} />
          <Route path="/vendordashboard" element={<VendorDashboard />} />
        </Routes>
      </medContext.Provider>


    </BrowserRouter>
  );
};

export default App;
