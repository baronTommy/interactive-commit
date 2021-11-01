import { fetchIssues } from "./plugin/github";
import { gitmojis } from "./plugin/gitmoji";

// ts-prune-ignore-next
export const plugin = {
  gitmoji: { gitmojis },
  github: { fetchIssues },
};
