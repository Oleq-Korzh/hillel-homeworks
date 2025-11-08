import {
  getTodoList,
  setTodoItem,
  removeTodoItem,
  changeTodoItem as putTodoItem,
} from "../utils/api.js";
import {
  debounce,
  generateId,
  getCurrentTime,
  isEmptyString,
  PRIORITY_ORDER,
  changeStatus,
} from "../utils/helpers.js";
import { renderList } from "../utils/layout.js";
import route from "../utils/routes.js";

const initTodo = async (rootSelector) => {
  const todoRoot = document.querySelector(rootSelector);

  if (!todoRoot) {
    return;
  }

  let _TODOS = (await getTodoList(route)) || [];
  let _CURRENT_TODOS = [..._TODOS];
  const _FILTERS = {
    _sort: "",
    _status: "",
    _priority: "",
    _search: "",
  };
  const DEFAULT_SORT_VALUE = "newest";
  const DEFAULT_FILTER_VALUE = "all";
  const HIDE_CLASS = "hide";
  let debounceSearch = debounce(() => sortAndRenderTodoItems(), 250);

  const showError = () => {
    todoError.classList.remove(HIDE_CLASS);
  };

  const hideError = () => {
    todoError.classList.add(HIDE_CLASS);
  };

  const sortAndRenderTodoItems = () => {
    let filtered = [..._TODOS];

    if (_FILTERS._search !== "") {
      filtered = filtered.filter((todo) => {
        return todo.title.toLowerCase().includes(_FILTERS._search);
      });
    }

    if (_FILTERS._sort === "newest") {
      filtered = filtered.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    } else if (_FILTERS._sort === "oldest") {
      filtered = filtered.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
    } else if (_FILTERS._sort === "priority") {
      filtered = filtered.sort((a, b) => {
        return PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority];
      });
    }

    if (_FILTERS._status !== "all") {
      filtered = filtered.filter((todo) => {
        return todo.status === _FILTERS._status;
      });
    }

    if (_FILTERS._priority !== "all") {
      filtered = filtered.filter((todo) => {
        return todo.priority === _FILTERS._priority;
      });
    }

    _CURRENT_TODOS = [...filtered];
    showData();
  };

  const setTodoSort = (e) => {
    _FILTERS._sort = e.target.value || DEFAULT_SORT_VALUE;
    sortAndRenderTodoItems();
  };

  const setTodoSearch = (e) => {
    _FILTERS._search = e.target.value.trim().toLowerCase();
    debounceSearch();
  };

  const setTodoStatus = (e) => {
    _FILTERS._status = e.target.value;

    sortAndRenderTodoItems();
  };

  const setTodoPriority = (e) => {
    _FILTERS._priority = e.target.value;

    sortAndRenderTodoItems();
  };

  const submitForm = async (e) => {
    e.preventDefault();

    hideError();

    const formData = new FormData(todoForm);
    const formObj = Object.fromEntries(formData.entries());

    formObj.date = getCurrentTime(".");
    formObj.id = generateId();

    if (isEmptyString(formObj.title) || isEmptyString(formObj.description)) {
      showError();

      return;
    }

    _TODOS = await setTodoItem(formObj);
    _CURRENT_TODOS = [..._TODOS];

    todoForm.reset();
    sortAndRenderTodoItems();
  };

  const showData = () => {
    todoList.innerHTML = renderList(_CURRENT_TODOS);
    todoCount.textContent = _CURRENT_TODOS.length;

    checkTodoList();
  };

  const checkTodoList = () => {
    const isEmpty = todoList.children.length === 0;

    todoEmpty.classList.toggle(HIDE_CLASS, !isEmpty);
    todoList.classList.toggle(HIDE_CLASS, isEmpty);
  };

  const changeTodoItem = async (e) => {
    const todo = e?.target?.closest(".todo");

    if (!todo) {
      return;
    }

    const id = todo.dataset.id;

    if (e.target.classList.contains("todo__delete")) {
      _TODOS = await removeTodoItem(id);
      _CURRENT_TODOS = [..._TODOS];
      sortAndRenderTodoItems();
    }

    if (e && e.target.classList.contains("badge")) {
      const status = todo.dataset.status;

      if (!status) {
        return;
      }

      const newStatus = changeStatus(status);

      if (!newStatus) {
        return;
      }

      _TODOS = await putTodoItem(id, newStatus);
      _CURRENT_TODOS = [..._TODOS];
      sortAndRenderTodoItems();
    }
  };

  const todoForm = todoRoot.querySelector(".todo-form");
  const todoError = todoRoot.querySelector(".todo-error");
  const todoList = todoRoot.querySelector(".todo-list");
  const todoEmpty = todoRoot.querySelector(".todo-empty");
  const todoSearch = todoRoot.querySelector(".control--search input");
  const todoSort = todoRoot.querySelector(".sort");
  const todoSortStatus = todoRoot.querySelector(".sort-status");
  const todoSortPriority = todoRoot.querySelector(".sort-priority");
  const todoCount = todoRoot.querySelector(".count");

  const initApp = () => {
    _FILTERS._sort = todoSort.value || DEFAULT_SORT_VALUE;
    _FILTERS._status = todoSortStatus.value || DEFAULT_FILTER_VALUE;
    _FILTERS._priority = todoSortPriority.value || DEFAULT_FILTER_VALUE;

    sortAndRenderTodoItems();

    todoForm.addEventListener("submit", submitForm);
    todoSearch.addEventListener("input", setTodoSearch);
    todoSort.addEventListener("change", setTodoSort);
    todoSortStatus.addEventListener("change", setTodoStatus);
    todoSortPriority.addEventListener("change", setTodoPriority);
    todoList.addEventListener("click", changeTodoItem);
  };

  initApp();
};

export default initTodo;
