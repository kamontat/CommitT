export function isExist(v: any) {
  return v !== undefined && v !== null && v !== "" && v !== "\n";
}

export const Transform = {
  /**
   * Simplify to
   *
   * 1. if only new line or any falsy value will changes to empty string
   *
   * @param {string} value string to simplify
   * @return {string} result
   */
  toempty: (value: string) => (!value || value === "\n" ? "" : value),
  /**
   * Simplify to
   *
   * 1. lowercase
   * 2. remove leading and trailing whitespace
   *
   * @param {string} value string to simplify
   * @return {string} result
   */
  lower: (value: string) => {
    return Transform.toempty(value)
      .trim()
      .toLowerCase();
  },
  /**
   * Simplify to
   *
   * 1. lowercase
   * 2. remove leading and trailing whitespace
   * 3. remove trailing dot
   *
   * @param {string} value string to simplify
   * @return {string} result
   */
  subject: (value: string) => {
    return Transform.lower(value).replace(/\.+$/, "");
  },
  /**
   * Simplify to
   *
   * 1. lowercase
   * 2. replace all spacebar to -
   *
   * @param {string} value string to simplify
   * @return {string} result
   */
  slug: (value: string) => {
    return Transform.lower(value).replace(/ /g, "-");
  },

  commitMessage: (response: any) => {
    let footer = "";
    if (response.issues && response.issues.length > 0)
      footer +=
        `This ` +
        response.issues.map((v: string) => `closes ${v}`).join(", ") +
        `\n`;
    if (isExist(response.breakchange)) footer += response.breakchange;

    const msg = `${response.type}${
      isExist(response.scope) ? `(${response.scope})` : ""
    }: ${response.subject}

${isExist(response.body) ? `${response.body}\n\n` : ""}${
      isExist(footer) ? `${footer}` : ""
    }`;

    return msg;
  }
};
