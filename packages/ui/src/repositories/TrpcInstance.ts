import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../../infra/src/interfaces/TrpcService";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      // TODO 環境変数
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});
