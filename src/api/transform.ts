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
    let message = `${response.type}`;
    // Add scope
    if (isExist(response.scope)) message += `(${response.scope}): `;
    else message += `: `;
    // Add subject
    message += response.subject;
    // Add body
    if (isExist(response.body)) message += `\n\n${response.body}`;
    // Generate footer
    const is = response.issues;
    let footer = "";
    if (is && is.length > 0)
      footer += `This will ${is.map((v: string) => `closes ${v}`).join(", ")}`;
    if (isExist(response.breakchange)) footer += `\n${response.breakchange}`;
    // Add footer
    if (footer) message += `${footer}`;
    // Return
    return message;
  }
};
