import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from "./TodoForm";
import { describe, expect, test, vi } from "vitest";
import { setTodo } from "../../store/features/todos/todosActions";

vi.mock("../../hooks/useLang", () => ({
  useLang: () => ({
    langData: {
      form: {
        titlePlaceholder: "Title",
        descPlaceholder: "Description",
        button: "Add task",
      },
    },
  }),
}));

const mockDispatch = vi.fn();
vi.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

vi.mock("../../store/features/todos/todosActions", () => ({
  setTodo: vi.fn(),
}));

vi.mock("../../utils/helpers", () => ({
  getCurrentTime: () => "01.01.2025",
}));

vi.stubGlobal("crypto", {
  randomUUID: () => "test-uuid-123",
});

describe("TodoForm component", () => {
  test("send task", async () => {
    render(<TodoForm />);

    const user = userEvent.setup();

    const titleInput = screen.getByPlaceholderText("Title");
    const descInput = screen.getByPlaceholderText("Description");
    const button = screen.getByText("Add task");

    await user.type(titleInput, "Test task");
    await user.type(descInput, "Some description");

    await user.click(button);

    expect(mockDispatch).toHaveBeenCalled();

    expect(setTodo).toHaveBeenCalledWith({
      title: "Test task",
      description: "Some description",
      priority: "low",
      status: "pending",
      date: "01.01.2025",
      timestamp: expect.any(Number),
      id: "test-uuid-123",
    });
  });
});
