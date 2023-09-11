import { trpc } from "../../repositories/TrpcInstance";

export const trpcDataGreeting = async () => {
  console.log(await trpc.greeting.hello.query());
  // return trpc.greeting.hello.query();
};

trpcDataGreeting();
