import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { server } from "./mocks/server";
import { apiUrl } from "./api";
import App from "./App";

describe("App", () => {
  test("Renders without crashing", () => {
    render(<App />);
  });

  test("Renders and displays a list of all countries", async () => {
    render(<App />);

    expect(screen.queryByText("Loading...")).toBeInTheDocument();

    waitFor(() => screen.getAllByTestId("countries"));

    expect(await screen.findAllByTestId("country")).toHaveLength(3);

    expect(await screen.findByText("Nigeria")).toBeInTheDocument();
  });

  test("Renders when the request fails and show an error message", async () => {
    server.use(
      rest.get(`${apiUrl}/all`, (req, res, ctx) => {
        // Mock a failed request for the application to handle the error properly
        return res(ctx.status(500));
      })
    );

    render(<App />);

    await waitFor(() => screen.getByTestId("error"));

    expect(screen.getByText("Failed to fetch countries")).toBeInTheDocument();
  });
});
