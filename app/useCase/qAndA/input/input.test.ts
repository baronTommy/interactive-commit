import { makeQuestion } from "./input";

describe("makeQuestion", () => {
  test("res test", async () => {
    const v = "";
    // @ts-expect-error
    const res = await makeQuestion(v);
    expect(res).toEqual(v);
  });
});
