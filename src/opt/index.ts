import { fetchIssues } from "./plugin/github";
import { gitmojis } from "./plugin/gitmoji";
export type { Setting } from "./type";

// ts-prune-ignore-next
export const plugin = {
  gitmoji: { gitmojis },
  github: { fetchIssues },
};
