import { setupServer } from "msw/node";
import { createTRPCMsw } from "msw-trpc";
import type { AppRouter } from "../../../../infra/src/interfaces/TrpcService";

export const trpcMsw = createTRPCMsw<AppRouter>(); /* 👈 */

const trpcHandlers = [
  //   trpcMsw.userById.query((req, res, ctx) => {
  //     return res(ctx.status(200), ctx.data({ id: "1", name: "Uncle bob" }));
  //   }),
  //   trpcMsw.createUser.mutation(async (req, res, ctx) => {
  //     return res(ctx.status(200), ctx.data({ id: "2", name: await req.json() }));
  //   }),
  trpcMsw.greeting.hello.query(() => "Hello TrpcMsw"),
];

export const server = setupServer(...trpcHandlers);
