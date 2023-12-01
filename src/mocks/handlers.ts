import { rest } from "msw";

import type {
  RestRequest,
  ResponseComposition,
  DefaultBodyType,
  RestContext,
} from "msw";

const handlers = [
  rest.get(
    "/test",
    (
      req: RestRequest,
      res: ResponseComposition<DefaultBodyType>,
      ctx: RestContext
    ) => {
      return res(ctx.status(200), ctx.delay(200), ctx.json({ data: "hello" }));
    }
  ),
];

export default handlers;
