import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterCountries from "../FilterCountries";

describe("FilterCountries Component", () => {
  test("Renders without crashing", () => {
    const handleInput = jest.fn();
    render(<FilterCountries handleInput={handleInput} />);
  });

  test("Renders search field", () => {
    const handleInput = jest.fn();
    render(<FilterCountries handleInput={handleInput} />);
    const inputNode = screen.getByPlaceholderText("Search for a country...");
    expect(inputNode).toBeInTheDocument();
  });

  test("Type into search field", async () => {
    const handleInput = jest.fn();
    render(<FilterCountries handleInput={handleInput} />);
    const inputNode = screen.getByPlaceholderText("Search for a country...");
    const text = "Hello";

    await userEvent.type(inputNode, text);
    expect(inputNode).toHaveValue(text);
  });
});
