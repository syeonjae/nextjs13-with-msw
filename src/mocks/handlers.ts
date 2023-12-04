import { rest } from "msw";

type UserRank = "하사" | "중사" | "상사";

interface User {
  uid: number;
  uname: string;
  unumber: number;
  ubirth: number;
  urank: UserRank;
}

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
