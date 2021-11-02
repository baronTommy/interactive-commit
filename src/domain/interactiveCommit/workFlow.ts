import type { Answer, InputTypeQ, Question, Setting } from "./core";

/**
 * 設定を元に、入力値で補間されたテンプレートを返す
 */
export type InteractiveCommit = (p: Setting) => Promise<Setting["template"]>;

/**
 * 設問の取得
 */
export type GetQuestion = (p: Setting) => Question | undefined;

/**
 * 設問の回答をテンプレートに反映
 */
export type UpdateTemplate = (p: {
  template: Setting["template"];
  searchValue: string;
  answer: Answer;
}) => Setting["template"];

/**
 * 入力形式の設問とテンプレート
 */
export type InputTypeQnTpl = {
  question: InputTypeQ;
  template: Setting["template"];
};

/**
 * 選択形式の設問とテンプレート
 */
export type SearchListTypeQnTpl = {
  question: {
    choices: Array<{ name: string; description: string; value: string }>;
  };
  template: Setting["template"];
};

/**
 * 設問の取得など、設問表示前の準備を行う
 */
export type PrepareQuestions = (p: {
  question: Question;
  template: Setting["template"];
}) => Promise<InputTypeQnTpl | SearchListTypeQnTpl | never>;
