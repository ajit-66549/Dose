import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";
import HealthInput from "../components/HealthInput.jsx";

function Dashboard() {
  const [entries, setEntries] = useLocalStorage("entries", []);
  const [goals, setGoals] = useLocalStorage("goals", {
    steps: 8000,
    calories: 2000,
    water: 2000,
    sleep: 8,
  });

  const handleSave = (entry) => {
    setEntries(prev => [...prev, entry]);
  }

  return (
    <div className="dash-main">
      <h1>Dashboard</h1>
      <HealthInput onSave={handleSave}/>
    </div>
  );
}

export default Dashboard;
