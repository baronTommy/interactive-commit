import { makeQuestion as makeQuestionForInput } from "~/useCase/qAndA/input";
import { makeQuestion as makeQuestionForSearchList } from "~/useCase/qAndA/searchList";
import { findQuestion, getQuestion, isDone, updateTemplate } from "./workFlow";

jest.mock("~/useCase/qAndA/searchList");
jest.mock("~/useCase/qAndA/input");

describe("getQuestion", () => {
  test("array is empty", () => {
    expect(
      // @ts-expect-error
      getQuestion({
        questionDictionary: [],
      })
    ).toEqual(undefined);
  });

  test("array has value", () => {
    expect(
      getQuestion({
        // @ts-expect-error
        questionDictionary: ["ok"],
      })
    ).toEqual("ok");
  });
});

describe("isDone", () => {
  test("undefined", () => {
    expect(isDone(undefined)).toEqual(true);
  });
  test("not undefined", () => {
    // @ts-expect-error
    expect(isDone("")).toEqual(false);
  });
});

describe("updateTemplate", () => {
  test("replace test", () => {
    const newTpl = updateTemplate({
      template: "{{type}}{{(scope)}}",
      answer: "feat",
      searchValue: "type",
    });

    expect(newTpl).toEqual("feat{{(scope)}}");
  });
});

describe("findQuestion", () => {
  test("search-list", () => {
    (makeQuestionForSearchList as jest.Mock) = jest.fn();
    //@ts-expect-error
    findQuestion({ type: "search-list" }, "");
    expect(makeQuestionForSearchList).toHaveBeenCalled();
  });

  test("input", () => {
    (makeQuestionForInput as jest.Mock) = jest.fn();
    //@ts-expect-error
    findQuestion({ type: "input" }, "");
    expect(makeQuestionForInput).toHaveBeenCalled();
  });

  test("error test", () => {
    //@ts-expect-error
    expect(() => findQuestion({ type: "" }, "")).toThrowError();
  });
});
