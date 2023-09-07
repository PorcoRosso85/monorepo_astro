import { initTRPC } from "@trpc/server";
import { router } from "./TrpcInstances";
import { routings } from "./Routings";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";

const appRouter = router(routings);

export type AppRouter = typeof appRouter;

// const server = createHTTPServer({
//   router: appRouter,
// });
// server.listen(3000);

const server = express();
server.use(
  cors({
    origin: "http://localhost:5173", // クライアントのオリジン
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

server.use(
  "/api/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    // TODO
    // createContext,
  })
);

server.listen(3000);

if (import.meta.vitest) {
}
