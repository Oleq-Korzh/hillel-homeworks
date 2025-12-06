import { useDispatch } from "react-redux";
import PriorityLabel from "../PriorityLabel/PriorityLabel";
import "./ProjectCard.css";
import { deleteProjectAsync } from "../../store/features/projects";
import { useNavigate } from "react-router";
import { urls } from "../../router/menu";

export default function ProjectCard({
  id,
  title,
  description,
  priority,
  onClick,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    onClick && onClick(id);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteProjectAsync(id));
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    id && navigate(urls.EDIT_PROJECT.replace(":id", id));
  };

  return (
    <div className="ProjectCard" onClick={handleClick}>
      <div className="ProjectCard-header">
        <h3>{title}</h3>

        <div className="ProjectCard-actions">
          <button
            className="ProjectCard-edit"
            aria-label="Edit project"
            onClick={handleEdit}
          >
            ✎
          </button>

          <button
            className="ProjectCard-delete"
            onClick={handleDelete}
            aria-label="Delete project"
          >
            ✕
          </button>
        </div>
      </div>

      <PriorityLabel priority={priority} />
      <p>{description}</p>
    </div>
  );
}
