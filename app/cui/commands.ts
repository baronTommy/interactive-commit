import { cac } from "cac";
import { cosmiconfigSync } from "cosmiconfig";
import { commitMsg } from "~/cui/commit";
import { main } from "~/main";

const cli = cac();

cli
  .command("commit", "Interactively commit using the prompts")
  .option("--hook", "DO NOT USE")
  .action((args) => {
    if (!args.hook) {
      return;
    }
    const conf = cosmiconfigSync("interactive-commit").search()?.config;
    main(conf).then(commitMsg);
  });

cli.help();
cli.parse();
