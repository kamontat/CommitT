import { commitLengthPerLine } from "../constants";
import { theme } from "../model/theme";

export const Formatize = {
  maximumLine: (v: string) => {
    const line = v.split("\n");
    const last = line[line.length - 1];
    const size = last.length;

    if (size < commitLengthPerLine) return `${v} ${theme.dim(`(${size})`)}`;
    else return `${theme.error(v)} ${theme.dim(`(ADD NEW LINE)`)}`;
  },
  breakchange: (v: string) => {
    return `${theme.dim("BREAKING CHANGE:")} ${v}`;
  },
  issue: (v: any) => {
    const sep = " ";
    const prefix = (v: string) => {
      if (v.includes("#")) return v;
      return `${theme.dim("#")}${v}`;
    };

    if (typeof v === "object") return v.map((t: string) => prefix(t));

    return v
      .split(sep)
      .map((t: string) => prefix(t))
      .join(sep);
  }
};
