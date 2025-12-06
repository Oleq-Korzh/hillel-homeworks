import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { getTodos } from "../../store/features/todos/todosActions";
import { describe, expect, test, vi } from "vitest";
import App from "./App";
import { langEn } from "../../language/en";

const mockStore = configureStore([]);

vi.mock("../../store/features/todos/todosActions", () => ({
  getTodos: vi.fn(() => ({ type: "GET_TODOS" })),
}));

describe("App root component", () => {
  test("load todos", () => {
    const store = mockStore({
      todos: { data: [] },
      lang: {
        lang: "EN",
        data: langEn,
      },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getTodos).toHaveBeenCalledTimes(1);
  });
});
