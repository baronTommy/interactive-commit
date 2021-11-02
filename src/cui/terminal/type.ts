import type { Answer, Question } from "~/domain/interactiveCommit/core";

export type AnswerValue = Answer | number;
export type AnswerVO = Record<Question["name"], AnswerValue>;
