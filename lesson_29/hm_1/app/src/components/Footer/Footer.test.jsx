import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { describe, expect, test, vi } from "vitest";

vi.mock("../../hooks/useLang", () => ({
  useLang: () => ({
    langData: {
      countTodo: {
        first: "Total tasks:",
        second: "items",
      },
    },
  }),
}));

describe("Footer component", () => {
  test("render count footer", () => {
    render(<Footer count={5} />);

    // тут были ошибки из-за того, что в одном диве находится 3 разные строки, поэтому пришлось через includes делать, чтобы нашло
    expect(
      screen.getByText((text) => text.includes("Total tasks:"))
    ).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(
      screen.getByText((text) => text.includes("items"))
    ).toBeInTheDocument();
  });
});
