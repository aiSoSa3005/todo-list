import { useState } from "react";
import "./Popupform.css";

interface Props {
  onClose: () => void;
  onAddTask: (description: string) => void;
}

const PopupForm = ({ onClose,onAddTask }: Props) => {
  const [description, setDescription] = useState("");
  const handleFormClick = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(description);
    onClose();
  };
  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleFormClick}>
          <h1>Add Task</h1>
    
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <div className="input-container">
              <input
                id="description"
                placeholder="Enter task description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </div>
          <button className="btn auth" type="submit">
            Add task
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
