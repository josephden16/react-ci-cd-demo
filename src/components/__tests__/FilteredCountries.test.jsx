import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilteredCountries from "../FilteredCountries";
import { countries } from "../../dummy-data";

describe("FilteredCountries Component", () => {
  test("Renders without crashing", () => {
    render(<FilteredCountries countries={countries} />);
  });

  test("Typing a valid country into the search field filters countries displayed", async () => {
    render(<FilteredCountries countries={countries} />);
    const inputNode = screen.getByPlaceholderText("Search for a country...");
    const text = countries[0].name;

    await userEvent.type(inputNode, text);
    expect(inputNode).toHaveValue(text);
    expect(screen.queryAllByTestId("country").length).toBeGreaterThan(0);
  });

  test("Typing an invalid country into the search field should display no countries", async () => {
    render(<FilteredCountries countries={countries} />);
    const inputNode = screen.getByPlaceholderText("Search for a country...");
    const text = "1010100101";

    await userEvent.type(inputNode, text);
    expect(inputNode).toHaveValue(text);
    expect(screen.queryAllByTestId("country").length).not.toBeGreaterThan(0);
  });
});
