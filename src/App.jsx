import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Singleproduct from "./pages/Singleproduct";
import PageNotFound from "./pages/PageNotFound";
import StyledNavbar from "./components/StyledNavbar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"

function App() {
  return (    
      <div className="App">       
          <StyledNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="products/:productId" element={<Singleproduct />} />
            <Route path="/kaza" element={<Navigate to="/" replace />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />      
      </div>
      
      
  );
}

export default App;