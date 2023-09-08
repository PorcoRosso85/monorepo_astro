import { describe, it } from "vitest";
import { trpc } from "./TrpcInstance";

export const trpcData = async (query: undefined) => {
  const response = await trpc.indexObject.query(query);
  return response;
};
