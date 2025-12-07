import { useDispatch } from "react-redux";
import PriorityLabel from "../PriorityLabel/PriorityLabel";
import "./TaskCard.css";
import { deleteTaskAsync } from "../../store/features/tasks";
import { useNavigate } from "react-router";
import { urls } from "../../router/menu";

export default function TaskCard({ id, title, description, priority }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteTask = (e) => {
    e.stopPropagation();
    dispatch(deleteTaskAsync(id));
  };

  const handleEditTask = (e) => {
    e.stopPropagation();
    navigate(urls.EDIT_TASK.replace(":id", id));
  };

  return (
    <div className="TaskCard">
      <div className="TaskCard-header">
        <h3>{title}</h3>

        <div className="TaskCard-actions">
          <button
            className="TaskCard-edit"
            aria-label="Edit task"
            onClick={handleEditTask}
          >
            ✎
          </button>

          <button
            className="TaskCard-delete"
            onClick={handleDeleteTask}
            aria-label="Delete task"
          >
            ✕
          </button>
        </div>
      </div>

      <PriorityLabel priority={priority} />
      <p>{description.slice(0, 100)}</p>
    </div>
  );
}
