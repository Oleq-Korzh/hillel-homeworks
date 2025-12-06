import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import TodoItem from "./TodoItem";
import { deleteTodo } from "../../store/features/todos/todosActions";

const mockDispatch = vi.fn();
vi.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

vi.mock("../../store/features/todos/todosActions", () => ({
  deleteTodo: vi.fn(),
}));

describe("TodoItem component", () => {
  const mockTodo = {
    title: "testick",
    description: "testick desc",
    priority: "low",
    status: "pending",
    date: "14:38:49 06.12.2025",
    id: "6f278d50-809f-4a40-a2be-3fbcbdbfbcbc",
    timestamp: 1765024729918,
  };

  test("render item", () => {
    render(<TodoItem todo={mockTodo} />);

    expect(screen.getByText("testick")).toBeInTheDocument();
    expect(screen.getByText("testick desc")).toBeInTheDocument();
  });

  test("delete todo", () => {
    render(<TodoItem todo={mockTodo} />);

    const deleteBtn = screen.getByTitle("Видалити задачу");
    fireEvent.click(deleteBtn);

    expect(deleteTodo).toHaveBeenCalledWith(
      "6f278d50-809f-4a40-a2be-3fbcbdbfbcbc"
    );
    expect(mockDispatch).toHaveBeenCalledWith(
      deleteTodo("6f278d50-809f-4a40-a2be-3fbcbdbfbcbc")
    );
  });
});
