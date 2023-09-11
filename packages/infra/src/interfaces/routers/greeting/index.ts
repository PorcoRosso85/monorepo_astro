import { router, publicProcedure } from "../../trpc/index";

export const greetingRouter = router({
  hello: publicProcedure.query(() => "Hello, tRPC testing!"),
});
