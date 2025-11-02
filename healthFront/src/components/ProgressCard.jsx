import "../style/progressCard.css";

function ProgressCard({ label, value, goal }) {
  // Calculate percentage for progress bar
  const percentage = Math.min((value / goal) * 100, 100);

  // Determine if the goal is completed
  const isComplete = percentage >= 100;

  return (
    <div className="prog-main">
      <h3>{label}</h3>
      <p>
        {value} / {goal} ({percentage.toFixed(1)}%)
      </p>
      <div className="chart">
        <div
          className={`chart-fill ${isComplete ? "complete" : ""}`}
          style={{ width: `${percentage}%` }}
        >
        </div>
      </div>
    </div>
  );
}

export default ProgressCard;
