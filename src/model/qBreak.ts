import { theme } from "./theme";
import { Formatize } from "../api/format";
import { TransformResult } from "../api/result";

export default [
  {
    type: "toggle",
    name: "hasBreakChange",
    message: `Do you have ${theme.highlight("BREAK CHANGE")}?`,
    enabled: "Yes",
    disabled: "No",
    initial: false
  },
  {
    skip: (state: any) => {
      if (typeof state === "object") return !state.answers.hasBreakChange;
      else return false;
    },
    type: "text",
    name: "breakchange",
    message: `Input ${theme.highlight(
      "BREAK CHANGE"
    )} and enter 2 times to confirm`,
    initial: "",
    multiline: true,
    format: Formatize.breakchange,
    result: TransformResult.breakchange
  }
];
