const conf = require("./interactive-commit.config");

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
            ...conf.questionDictionary[0].getChoices().map((v) => ({
              type: v.value,
              section: v.value,
              hidden: false,
            })),
          ],
        },
      },
    ],
    "@semantic-release/github",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
  ],
};
