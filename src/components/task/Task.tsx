import "./Task.css";

interface Props {
  text: string;
  isCompleted: boolean; 
  onToggleComplete?: () => void; 
}

const Task = ({ text, isCompleted, onToggleComplete }: Props) => {
  return (
    <div className="task">
      {/* Checkbox  */}
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onToggleComplete}
          className="hidden-checkbox"
        />
        <span className="checkbox-icon"></span>
      </label>

     {/* Task Content */}
      <div className={`task-content ${isCompleted ? "completed" : ""}`}>
        {text}
      </div>

      {/* Tasks Buttons */}
      <div className="task-actions">
        <button className="btn edit">Edit</button>
        <button className="btn delete">Delete</button>
      </div>
    </div>
  );
};

export default Task;