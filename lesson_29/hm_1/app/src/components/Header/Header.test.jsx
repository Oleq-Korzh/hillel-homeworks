import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { describe, expect, test, vi } from "vitest";

const mockHandleChangeLang = vi.fn();

vi.mock("../../hooks/useLang", () => ({
  useLang: () => ({
    lang: "EN",
    langData: {
      titleTodo: "My Todo List",
    },
    handleChangeLang: mockHandleChangeLang,
  }),
}));

describe("Header component", () => {
  test("render header", () => {
    render(<Header />);
    expect(screen.getByText("My Todo List")).toBeInTheDocument();
    expect(screen.getByText("EN")).toBeInTheDocument();
  });

  test("handle click", () => {
    render(<Header />);

    fireEvent.click(screen.getByText("EN"));

    expect(mockHandleChangeLang).toHaveBeenCalledTimes(1);
  });
});
