import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import SetGoals from "./pages/SetGoals.jsx";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Dashboard</Link> | <Link to="/setGoals">Set Goals</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/setGoals" element={<SetGoals />} />
      </Routes>
    </Router>
  );
}

export default App;
