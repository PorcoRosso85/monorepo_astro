import { describe, expect, test } from "vitest";
import { trpcDataGreeting } from "./greeting";

describe("use msw", () => {
  test("本番サーバー", async () => {
    // trpcDataGreeting();
    const res = await trpcDataGreeting();

    expect(res).toEqual("Hello, tRPC testing!");
  });
  //   test("mswサーバー");
});
