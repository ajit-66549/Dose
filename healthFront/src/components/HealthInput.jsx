import { useState } from "react";


function HealthInput({ onSave }) {
    const [form, setForm] = useState({
        steps: "",
        calories: "",
        water: "",
        sleep: "",
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: [e.target.value]});
    }

    const handleSubmit = (e) => {
        onSave({...form, date: new Date().toLocaleDateString() });
        setForm({ steps: "", calories: "", water: "", sleep: ""});
    }

    return <div className="form-main">
        <input name="steps" placeholder="steps" value={form.steps} onChange={handleChange} />
        <input name="calories" placeholder="calories" value={form.calories} onChange={handleChange} />
        <input name="water" placeholder="water" value={form.water} onChange={handleChange} />
        <input name="sleep" placeholder="sleep" value={form.sleep} onChange={handleChange} />
        <button onClick={handleSubmit}>Save</button>
    </div>
}

export default HealthInput;