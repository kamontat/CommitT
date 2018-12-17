import { theme } from "./theme";
import { Transform } from "../api/transform";
import { commitLength } from "../constants";

export default {
  type: "text",
  name: "subject",
  message: `Input ${theme.highlight("commit subject")}`,
  required: true,
  result: Transform.subject,
  format: (v: string) => {
    const size = v.length;
    if (size < commitLength) return `${v} ${theme.dim(`(${size})`)}`;
    else return `${theme.error(v)} ${theme.dim(`(${size})`)}`;
  },
  validate: (v: string) => {
    if (!v) return "Subject cannot be Falsy";
    if (v.length < 0) return "Subject cannot be empty string";
    if (v.length > commitLength)
      return `Subject cannot more than ${commitLength}`;
    return true;
  }
};
