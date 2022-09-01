import { describe, it } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import MutationProviders from "./MutationProviders";

// Create a new Redux store instance every time it's called, with an optional preloadedState value that can be used for an initial value
// Alternately pass in an already-created Redux store instance
// Pass through additional options to RTL's original render function
// Automatically wrap the component being tested with a <Provider store={store}>
// Return the store instance in case the test needs to dispatch more actions or check state
import { renderWithProviders } from "../../test-utils";

describe("Testing the MutationProviders Component", () => {

  it("render MutationProviders", () => {
    renderWithProviders(<MutationProviders />);

    const providerField: any = screen.getByTestId("providerTest").querySelector("input");
    expect(providerField).toHaveValue('');

    fireEvent.change(providerField, { target: { value: "my provider" } });
    expect(providerField).toHaveValue("my provider");

    const dayField: any = screen.getByTestId("dayTest").querySelector("input");
    expect(dayField).toHaveValue(0);

    fireEvent.change(dayField, { target: { value: 111 } });
    expect(dayField).toHaveValue(111);

    const yearField: any = screen.getByTestId("yearTest").querySelector("input");
    expect(yearField).toHaveValue(0);

    fireEvent.change(yearField, { target: { value: 111 } });
    expect(yearField).toHaveValue(111);

    const pageField: any = screen.getByTestId("pageTest").querySelector("input");
    expect(pageField).toHaveValue('');

    fireEvent.change(pageField, { target: { value: "my page" } });
    expect(pageField).toHaveValue("my page");

    const viewsField: any = screen.getByTestId("viewsTest").querySelector("input");
    expect(viewsField).toHaveValue(0);

    fireEvent.change(viewsField, { target: { value: 111 } });
    expect(viewsField).toHaveValue(111);
  });
});