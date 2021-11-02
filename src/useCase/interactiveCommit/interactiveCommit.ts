import * as terminal from "~/cui/terminal";
import type * as WorkFlow from "~/domain/interactiveCommit/workFlow";
import * as workFlow from "~/useCase/interactiveCommit/workFlow";

export const interactiveCommit: WorkFlow.InteractiveCommit = async (p) => {
  const question = workFlow.getQuestion(p);
  const template = p.template;

  if (question === undefined) {
    return Promise.resolve(template).finally(terminal.clear);
  }

  const answerVO = await terminal.renderingQnA({ ...p, question });

  const mayBeAnswer = terminal.validator.valid({
    answerVO,
    questionName: question.name,
  });

  if (mayBeAnswer.isErr) {
    throw new Error(mayBeAnswer.error.reason);
  }

  const answer = question.overwriteAnswer
    ? question.overwriteAnswer(mayBeAnswer.value.answer)
    : mayBeAnswer.value.answer;

  const newTemplate = workFlow.updateTemplate({
    answer,
    template,
    searchValue: question.name,
  });

  const tpl = question.overwriteTpl
    ? question.overwriteTpl(newTemplate)
    : newTemplate;

  return interactiveCommit({
    questionDictionary: p.questionDictionary,
    template: tpl,
    config: p.config,
  });
};
