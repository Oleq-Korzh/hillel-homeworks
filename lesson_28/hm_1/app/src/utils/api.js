import route from "./routes.js";

export const fetchData = async (url, options = {}) => {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error("Error http");
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const getTodoList = async () => {
  return fetchData(route) || [];
};

export const setTodoItem = async (todoItem) => {
  return fetchData(route, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoItem),
  });
};

export const changeTodoItem = async (id, newStatus) => {
  return fetchData(`${route}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: newStatus }),
  });
};

export const removeTodoItem = async (id) => {
  return fetchData(`${route}/${id}`, {
    method: "DELETE",
  });
};
