import { Logger } from "./logger";

const exec = require("child_process").exec;

export default (
  _: Logger,
  message: string,
  options: { dry?: boolean; allowEmpty?: boolean }
) => {
  // const processArgs = process.argv
  //   .slice(2)
  //   .filter(v => !v.includes("--dry"))
  //   .map(v => {
  //     if (/^-[a-zA-Z]$/.test(v)) return v; // short option
  //     if (/^--[a-zA-Z]+/.test(v)) return v;
  //     // long option
  //     else return `"${v}"`;
  //   });

  const args = ["commit"];
  if (message) args.push("-m", `"${message}"`);
  if (options.allowEmpty) args.push("--allow-empty");

  // args.push(...processArgs);

  const command = `git ${args.join(" ")}`;

  if (options.dry) console.log(command);
  else {
    const child = exec(command);
    child.stdin.pipe(process.stdin);
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  }
};
