import { capitalize } from "./helpers.js";

export const renderTodoItem = (todo) => {
  return `
    <li class="todo" data-id="${todo.id}" data-status="${todo.status}">
      <div class="todo__main">
        <div class="todo__title">${todo.title}</div>
        <div class="todo__desc">${todo.description}</div>
      </div>
      <div class="todo__meta">
        <span class="pill pill--${todo.priority}">${capitalize(
    todo.priority
  )}</span>
        <span class="badge badge--${todo.status}">${capitalize(
    todo.status
  )}</span>
        <time class="date" datetime="${todo.date}">Created: ${todo.date}</time>
        <button class="todo__delete" title="Видалити задачу">×</button>
      </div>
    </li>`;
};

export const renderList = (listItems = []) => {
  return listItems
    .map((listEl) => {
      return renderTodoItem(listEl);
    })
    .join("");
};
