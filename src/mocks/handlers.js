import { rest } from "msw";
import { apiUrl } from "../api";
import { countries } from "../dummy-data";

export const handlers = [
  rest.get(`${apiUrl}/all`, (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(countries)
    );
  }),
];
