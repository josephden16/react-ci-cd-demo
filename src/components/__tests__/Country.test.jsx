import React from "react";
import { render, screen } from "@testing-library/react";
import Country from "../Country";
import { numberWithCommas } from "../../utils";
import { country } from "../../dummy-data";

describe("Country Component", () => {
  test("Renders without crashing", () => {
    render(<Country country={country} />);
  });

  test("Displays country details", async () => {
    render(<Country country={country} />);

    const countryNameNode = screen.getByText(
      new RegExp(country.name.toLocaleLowerCase(), "i")
    );

    const countryRegionNode = screen.getByText(
      new RegExp(country.region.toLocaleLowerCase(), "i")
    );

    const countryCapitalNode = screen.getByText(
      new RegExp(country.capital.toLocaleLowerCase(), "i")
    );

    const countryPopulationNode = screen.getByText(
      numberWithCommas(country.population)
    );

    expect(countryNameNode).toBeInTheDocument();
    expect(countryRegionNode).toBeInTheDocument();
    expect(countryCapitalNode).toBeInTheDocument();
    expect(countryPopulationNode).toBeInTheDocument();
  });
});
