import { Logger } from "../model/logger";
import { CommandSetting } from "./_type";
import { Arguments } from "yargs";
import { prompt } from "enquirer";

import TypeQuestion from "../model/qType";
import ScopeQuestion from "../model/qScope";
import SubjectQuestion from "../model/qSubject";
import BodyQuestion from "../model/qBody";
import BreakChangeQuestion from "../model/qBreak";
import IssueQuestion from "../model/qIssue";
import { Transform } from "../api/transform";

import MakeCommit from "../model/commit";
import { Validate } from "../api/validate";

export default {
  name: "$0",
  description: "Commit code with angular convension",
  option: {
    dry: {
      alias: "D"
    },
    empty: {
      alias: "E"
    }
  },
  action: async (log: Logger, argv: Arguments) => {
    log.verbose(argv.verbose).debug(`Start commit`);

    let questions = [
      TypeQuestion,
      ScopeQuestion,
      SubjectQuestion,
      ...BodyQuestion,
      ...BreakChangeQuestion,
      IssueQuestion
    ];

    (prompt as any).on("cancel", () => {
      console.log("here");
      process.exit();
    });

    let response: any = await prompt(questions as any); // old type define version
    log.debug(`Response: ${JSON.stringify(response)}`);
    Validate.Response(response);

    const message = Transform.commitMessage(response);
    log.debug(`Commit message: ${message}`);
    const child = MakeCommit(log, message, {
      dry: argv.dry,
      allowEmpty: argv.empty
    });

    if (child) {
      child.stdin.pipe(process.stdin);
      child.stdout.pipe(process.stdout);
      child.stderr.pipe(process.stderr);
    }
  }
} as CommandSetting;
