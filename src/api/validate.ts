import { isExist } from "./transform";

export class Validate {
  static Response(res: any) {
    const requires = ["type", "subject"];

    if (!requires.every(v => isExist(res[v])))
      throw new Error("Type and Subject is required");

    const optional = ["hasBody", "hasBreakChange", "issues"];

    if (optional.some(v => res[v] === undefined))
      throw new Error("User is cancel the prompts");
  }
}
