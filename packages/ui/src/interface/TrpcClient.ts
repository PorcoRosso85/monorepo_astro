import { trpc } from "./TrpcInstance";

const indexObject = await trpc.indexObject.query();
