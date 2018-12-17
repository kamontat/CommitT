import { Logger } from "./logger";

const spawn = require("child_process").spawn;

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
  if (message) args.push("-m", `${message}`);
  if (options.allowEmpty) args.push("--allow-empty");

  if (options.dry) return console.log(`git ${args.join(" ")}`);
  else {
    return spawn(`git`, args, { stdio: "inherit" });
  }
};
