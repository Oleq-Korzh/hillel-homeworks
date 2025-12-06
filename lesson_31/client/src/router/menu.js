import AuthPage from "../pages/AuthPage/AuthPage";
import EditProject from "../pages/EditProject/EditProject";
import MainPage from "../pages/MainPage/MainPage";
import NewProjectPage from "../pages/NewProjectPage/NewProjectPage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import TasksPage from "../pages/TasksPage/TasksPage";

export const urls = {
  HOME_URL: "/",
  NEW_PROJECT_URL: "/projects/new",
  PROJECTS_URL: "/projects",
  TASKS_URL: "/tasks",
  SINGLE_PROJECT: "/tasks/:projectId",
  EDIT_PROJECT: "/projects/:id/edit",
  AUTH: "/auth",
};

export const menuItems = [
  {
    path: urls.HOME_URL,
    title: "Main",
    Component: MainPage,
  },
  {
    path: urls.PROJECTS_URL,
    title: "Projects",
    Component: ProjectsPage,
    protected: true,
  },
  {
    path: urls.NEW_PROJECT_URL,
    hideInMenu: true,
    Component: NewProjectPage,
    protected: true,
  },
  {
    path: urls.TASKS_URL,
    title: "Tasks",
    Component: TasksPage,
    protected: true,
  },
  {
    path: urls.SINGLE_PROJECT,
    hideInMenu: true,
    Component: TasksPage,
    protected: true,
  },
  {
    path: urls.EDIT_PROJECT,
    hideInMenu: true,
    Component: EditProject,
    protected: true,
  },
  {
    path: urls.AUTH,
    title: "Auth",
    Component: AuthPage,
    public: true,
  },
];
