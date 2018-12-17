import { theme } from "./theme";
import { Formatize } from "../api/format";

export default [
  {
    type: "toggle",
    name: "hasBody",
    message: `Do you want ${theme.highlight("commit body")}?`,
    enabled: "Yes",
    disabled: "No",
    initial: false
  },
  {
    skip: (state: any) => {
      if (typeof state === "object") return !state.answers.hasBody;
      else return false;
    },
    type: "text",
    name: "body",
    message: `Input ${theme.highlight(
      "commit body"
    )} and enter 2 times to confirm`,
    initial: "",
    multiline: true,
    format: Formatize.maximumLine,
    result: (v: string) => v.trim()
  }
];
