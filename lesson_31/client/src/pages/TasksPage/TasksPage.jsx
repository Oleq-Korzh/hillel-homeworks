import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import "./TasksPage.css";
import TaskCard from "../../components/TaskCard/TaskCard";
import { useEffect } from "react";
import { getTasksAsync } from "../../store/features/tasks";

export default function TasksPage() {
  const { data: tasks } = useSelector((state) => state.tasks);
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTasksAsync(projectId));
  }, [dispatch, projectId]);

  const handleBackPage = () => {
    navigate(-1);
  };

  return (
    <div className="TasksPage">
      <div onClick={handleBackPage}>Вернуться назад</div>
      {tasks.length === 0 && <span>No tasks available</span>}
      {tasks.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
}
