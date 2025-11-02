import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function SetGoals() {
  const [goals, setGoals] = useLocalStorage("goals", {
    steps: 12000,
    calories: 2000,
    water: 3000,
    sleep: 6,
  });

  const [form, setForm] = useState(goals);

  // update the form value with the new entry
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  // set the goal values upon submitting the form
  const handleSubmit = () => {
    setGoals({
        steps: Number(form.steps),
        calories: Number(form.calories),
        water: Number(form.water),
        sleep: Number(form.sleep),
    });
    alert("Goals updated successfully");
  }

  return (
    <div className="setgoals-main">
        <h1>Set your daily goals</h1>
      <input
        type="number"
        name="steps"
        value={form.steps}
        onChange={handleChange}
        placeholder="Set steps"
      />
      <input
        type="number"
        name="calories"
        value={form.calories}
        onChange={handleChange}
        placeholder="Set calories"
      />
      <input
        type="number"
        name="water"
        value={form.water}
        onChange={handleChange}
        placeholder="Set water"
      />
      <input
        type="number"
        name="sleep"
        value={form.sleep}
        onChange={handleChange}
        placeholder="Set sleep"
      />
      <button onClick={handleSubmit}>Set Goals</button>
    </div>
  );
}

export default SetGoals;