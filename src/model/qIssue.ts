import { theme } from "./theme";
import { Formatize } from "../api/format";
import { TransformResult } from "../api/result";

export default {
  type: "list",
  name: "issues",
  message: `Input ${theme.highlight("commit issues")} or skip by enter`,
  hint: "Type space-separated",
  separator: / /,
  required: false,
  format: Formatize.issue,
  result: TransformResult.issue
};
