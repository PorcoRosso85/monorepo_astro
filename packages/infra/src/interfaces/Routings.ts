import { publicProcedure } from "./TrpcInstances";
import { indexObject } from "../database/dao/IndexObject";

export const routings = {
  indexObject: publicProcedure.query(async () => {
    return indexObject;
  }),
};
