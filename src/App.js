import "./App.css";
import Home from "./Components/Home";
import Invoice from "./Components/Invoice";
import Customers from "./Components/Customers";
import Chats from "./Components/Chats";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./Components/Gallery";
import ClientProfile from "./Components/ClientProfile";
import EmployeeProfile from "./Components/EmployeeProfile";

function App() {
  
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Home   />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Chats" element={<Chats />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ClientProfile" element = {<ClientProfile />} />
          <Route path="/EmployeeProfile" element = {<EmployeeProfile />} />
         </Routes>
      </Router>
    
  );
}

export default App;
