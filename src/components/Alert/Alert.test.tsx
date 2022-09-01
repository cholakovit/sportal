import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Alert from "./AlertView";

describe("Testing the Alert Component", () => {
  const msg = "Network Problem";
  const type = 'error'

  it("render Error", () => {
    render(<Alert alert={msg} type={type} />);
    const alert = screen.getByTestId("alert");
    expect(alert).toHaveTextContent(msg);
  });
});
