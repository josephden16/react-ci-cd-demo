import React from "react";
import { render, screen } from "@testing-library/react";
import Countries from "../Countries";
import { countries } from "../../dummy-data";

describe("Countries Component", () => {
  test("Renders without crashing", () => {
    render(<Countries countries={countries} />);
  });

  test("Renders valid amount of countries", () => {
    render(<Countries countries={countries} />);
    expect(screen.queryAllByTestId("country")).toHaveLength(countries.length);
  });

  test("Renders when there's no data present", () => {
    render(<Countries countries={[]} />);
    expect(screen.queryAllByTestId("country").length).toBe(0);
  });
});
