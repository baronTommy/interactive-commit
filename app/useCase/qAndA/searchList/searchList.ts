import type { SearchListTypeQ, Setting } from "~/domain/core";

type MakeQuestion = (p: {
  question: SearchListTypeQ;
  template: Setting["template"];
}) => Promise<{
  question: SearchListTypeQ & {
    choices: Array<{ name: string; description: string; value: string }>;
  };
  template: Setting["template"];
}>;
export const makeQuestion: MakeQuestion = async (p) => {
  const choicesObj = await p.question.getChoices();

  const choices = choicesObj.map((v) => ({
    ...v,
    name: v.description,
  }));
  return {
    ...p,
    question: { ...p.question, choices },
  };
};
