import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from "./Pages/hrPages/History";
import Login from "./Pages/LoginPage";
import Leave from "./Pages/hrPages/Leave";
import Users from "./Pages/hrPages/Users";
import My from "./Pages/hrPages/My"
import PendingLeaves from "./Pages/hrPages/PendingLeaves";
import "./app.css";
import Home from "./Pages/hrPages/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        
          <Route path="my" element={<My />} />
          <Route path="home" element={<Home />} />
          <Route path="leave" element={<Leave />} />
          <Route path="history" element={<History />} />
          <Route path="users" element={<Users />} />
          <Route path="pendingleaves" element={<PendingLeaves />} />
          
       
      </Routes>
    </Router>
  );
}

export default App;
