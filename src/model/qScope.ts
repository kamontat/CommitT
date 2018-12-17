import { theme } from "./theme";
import { Transform } from "../api/transform";

export default {
  type: "text",
  name: "scope",
  message: `Input ${theme.highlight("commit scope")} or enter to skip!`,
  required: false,
  result: Transform.slug
};
