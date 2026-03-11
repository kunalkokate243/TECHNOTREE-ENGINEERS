import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import CNC from "./pages/CNC";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/cnc-vmc" element={<CNC />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;