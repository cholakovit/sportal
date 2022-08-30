import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import HeaderView from "./HeaderView";

describe("Testing the HeaderView Component", () => {
  it("Render HeaderView", () => {
    render(<HeaderView />);
    const checkbox = screen.getByTestId("button").querySelector("input");
    expect(checkbox).toHaveAttribute("type", "checkbox");
  });
});
