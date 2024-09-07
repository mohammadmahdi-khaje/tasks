import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Homepage from "./pages/Homepage";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Popup from "./components/Popup";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Contactus from "./pages/Contactus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="Login" element={<Login />} />
        <Route path="Aboutus" element={<Aboutus />} />
        <Route path="Services" element={<Services />} />
        <Route path="Contactus" element={<Contactus />} />
        <Route path="Homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
