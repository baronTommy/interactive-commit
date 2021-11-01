import * as chalk from "chalk";
import * as inquirer from "inquirer";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import * as inquirerAutocompletePrompt from "inquirer-search-list";
import { table } from "table";
import * as workFlow from "~/app/useCase/workFlow";
import type { Question, Setting } from "~/domain/core";
import type { AnswerVO } from "./type";
inquirer.registerPrompt("search-list", inquirerAutocompletePrompt);

type RenderTpl = (p: { question: Question } & Setting) => void;
const renderTpl: RenderTpl = (p) => {
  const content = table(
    [
      [`${p.questionDictionary.length + 1} questions left.`],
      [
        p.template
          .replace(
            new RegExp(`${p.question.name}`),
            chalk.inverse.bold[p.config.color](p.question.name)
          )
          .replace(new RegExp("{{", "g"), "")
          .replace(new RegExp("}}", "g"), ""),
      ],
    ],
    {
      columnDefault: {
        paddingLeft: 1,
        paddingRight: 1,
      },
      header: {
        content: chalk.bold(p.config.templateName),
      },
      border: {
        topBody: chalk[p.config.color](`─`),
        topJoin: chalk[p.config.color](`┬`),
        topLeft: chalk[p.config.color](`┌`),
        topRight: chalk[p.config.color](`┐`),

        bottomBody: chalk[p.config.color](`─`),
        bottomJoin: chalk[p.config.color](`┴`),
        bottomLeft: chalk[p.config.color](`└`),
        bottomRight: chalk[p.config.color](`┘`),

        bodyLeft: chalk[p.config.color](`│`),
        bodyRight: chalk[p.config.color](`│`),
        bodyJoin: chalk[p.config.color](`│`),

        joinBody: chalk[p.config.color](`─`),
        joinLeft: chalk[p.config.color](`├`),
        joinRight: chalk[p.config.color](`┤`),
        joinJoin: chalk[p.config.color](`┼`),
      },
    }
  );

  console.log(content);
};

type QAndA = (p: {
  question: Question;
  template: Setting["template"];
}) => Promise<AnswerVO>;
const qAndA: QAndA = (p) =>
  workFlow
    .findQuestion(p.question, p.template)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then((v) => inquirer.prompt<AnswerVO>(v.question as any));

type Clear = () => void;
export const clear: Clear = console.clear;

type RenderingQnA = (p: { question: Question } & Setting) => Promise<AnswerVO>;
export const renderingQnA: RenderingQnA = (p) => {
  clear();
  renderTpl(p);
  return qAndA(p);
};