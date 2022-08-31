import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MutationProviders from "./MutationProviders";

// Create a new Redux store instance every time it's called, with an optional preloadedState value that can be used for an initial value
// Alternately pass in an already-created Redux store instance
// Pass through additional options to RTL's original render function
// Automatically wrap the component being tested with a <Provider store={store}>
// Return the store instance in case the test needs to dispatch more actions or check state
import { renderWithProviders } from "../../test-utils";

describe("Testing the MutationProviders Component", () => {
  const error = "Network Problem";

  it("render MutationProviders", () => {
    renderWithProviders(<MutationProviders />);
  });
});