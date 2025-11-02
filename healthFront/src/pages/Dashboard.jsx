import useLocalStorage from "../hooks/useLocalStorage.js";
import HealthInput from "../components/HealthInput.jsx";
import ProgressCard from "../components/ProgressCard.jsx";

function Dashboard() {
  const [entries, setEntries] = useLocalStorage("entries", []);
  const [goals, setGoals] = useLocalStorage("goals", {
    steps: 8000,
    calories: 2000,
    water: 2000,
    sleep: 8,
  });

  const today = new Date().toLocaleDateString();
  const todayEntry = entries.find(entry => entry.date === today);

  const handleSave = (entry) => {
    setEntries(prev => [...prev, entry]);
  };

  return (
    <div className="dash-main">
      <h1>Dashboard</h1>
      <HealthInput onSave={handleSave} />

      <ProgressCard label="Steps" value={todayEntry?.steps || 0} goal={goals.steps} />
      <ProgressCard label="Calories" value={todayEntry?.calories || 0} goal={goals.calories} />
      <ProgressCard label="Water" value={todayEntry?.water || 0} goal={goals.water} />
      <ProgressCard label="Sleep" value={todayEntry?.sleep || 0} goal={goals.sleep} />
    </div>
  );
}

export default Dashboard;
