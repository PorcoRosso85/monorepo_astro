import { router, publicProcedure } from "../../trpc/index";
import fixture from "./fixture.json";

export const todosRouter = router({
  getTodos: publicProcedure.query(({}) => fixture.todos),
});
