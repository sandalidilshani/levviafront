import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from "./Pages/hrPages/History";
import Leave from "./Pages/hrPages/Leave";
import Users from "./Pages/hrPages/Users";
import Layoute from "./layoutes/HRLayoute";
import Pending from "./Pages/hrPages/PendingLeaves";
import "./app.css";

function App() {
  return (
    <Router>
      <div>
        <Layoute>
          {" "}
          {/* Opening tag for Layoute component */}
          <Routes>
            Leave <Route path="/Leave" element={<Leave />} />
            <Route path="/History" element={<History />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/History" element={<History />} />
            <Route path="/Pending" element={<Pending />} />
          </Routes>
        </Layoute>
      </div>
    </Router>
  );
}

export default App;
