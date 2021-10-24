// const conf = require("./interactive-commit.config");

const v = [
  { description: "feat: New feature", value: "feat" },
  { description: "fix: Bug fix", value: "fix" },
  { description: "docs: Documentation only changes", value: "docs" },
  {
    description:
      "style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
    value: "style",
  },
  {
    description:
      "refactor: Code change that neither fixes a bug nor adds a feature",
    value: "refactor",
  },
  {
    description: "perf: Code change that improves performance",
    value: "perf",
  },
  {
    description: "test: Adding missing tests or correcting existing tests",
    value: "test",
  },
  {
    description:
      "build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
    value: "build",
  },
  {
    description:
      "ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)",
    value: "ci",
  },
  {
    description: "chore: Other changes that don't modify src or test files",
    value: "chore",
  },
  {
    description: "revert: Reverts a previous commit",
    value: "revert",
  },
];

module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            ...v.map((v) => ({
              // ...conf.questionDictionary[0].getChoices().map((v) => ({
              type: v.value,
              section: v.value,
              hidden: false,
            })),
            { type: "", section: "---", hidden: false },
          ],
        },
      },
    ],
    "@semantic-release/github",
    "@semantic-release/npm",
    "@semantic-release/git",
  ],
};
