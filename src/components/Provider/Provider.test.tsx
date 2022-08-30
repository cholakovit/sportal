import { describe, it } from "vitest";
import ProviderView from "./ProviderView";
import { screen } from "@testing-library/react";

// The custom render function should let us:

// Create a new Redux store instance every time it's called, with an optional preloadedState value that can be used for an initial value
// Alternately pass in an already-created Redux store instance
// Pass through additional options to RTL's original render function
// Automatically wrap the component being tested with a <Provider store={store}>
// Return the store instance in case the test needs to dispatch more actions or check state
import { renderWithProviders } from "../../test-utils";

describe("Testing the PartnerView Component", () => {
  it("Render PartnerView", () => {
    let provider = {
      provider: 511,
      day: 229,
      year: 2022,
      page: "team",
      views: 918,
    };
    renderWithProviders(<ProviderView provider={provider} key={1} />);

    expect(screen.getByText("Page: " + provider.page)).toBeInTheDocument();
    expect(
      screen.getByText("Date: " + provider.year + " / " + provider.day)
    ).toBeInTheDocument();
    expect(screen.getByText("Views: " + provider.views)).toBeInTheDocument();
    expect(
      screen.getByText("Provider: " + provider.provider)
    ).toBeInTheDocument();

    const renderedProvider = screen.getAllByRole("provider");
    expect(renderedProvider.length).toEqual(1);
  });
});
