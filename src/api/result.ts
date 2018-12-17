export const TransformResult = {
  breakchange: (v: string) => {
    const r = v.trim();
    if (r === "" || r === "\n") return r;
    return `BREAKING CHANGE: ${v.trim()}`;
  },
  issue: (v: string[]) => {
    const prefix = (v: string) => {
      if (v.includes("#")) return v;
      return `#${v}`;
    };

    return v.map(t => prefix(t));
  }
};
