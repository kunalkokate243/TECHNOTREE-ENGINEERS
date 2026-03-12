import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CNC from "./pages/CNC";
import Manufacturing from "./pages/Manufacturing";
import Fabrication from "./pages/Fabrication";
import Automation from "./pages/Automation";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="page-container">
        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Pages */}
          <Route path="/automation" element={<Automation />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/fabrication" element={<Fabrication />} />
          <Route path="/cnc-vmc" element={<CNC />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<h1 style={{padding:"100px", textAlign:"center"}}>404 - Page Not Found</h1>} />

        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;