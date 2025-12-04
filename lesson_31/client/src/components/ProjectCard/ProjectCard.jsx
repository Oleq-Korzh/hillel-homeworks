import { useDispatch } from "react-redux";
import PriorityLabel from "../PriorityLabel/PriorityLabel";
import "./ProjectCard.css";
import { deleteProjectAsync } from "../../store/features/projects";

export default function ProjectCard({
  id,
  title,
  description,
  priority,
  onClick,
}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    onClick && onClick(id);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteProjectAsync(id));
  };

  return (
    <div className="ProjectCard" onClick={handleClick}>
      <div className="ProjectCard-header">
        <h3>{title}</h3>
        <button
          className="ProjectCard-delete"
          onClick={handleDelete}
          aria-label="Delete project"
        >
          ✕
        </button>
      </div>
      <PriorityLabel priority={priority} />
      <p>{description}</p>
    </div>
  );
}
