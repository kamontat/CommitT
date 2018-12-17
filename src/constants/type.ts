import { theme } from "../model/theme";

export const committType = [
  {
    name: "feat",
    message: `${theme.header("Feat")}: A new feature`
  },
  {
    name: "build",
    message: `${theme.header(
      "Build"
    )}: Changes that affect the build system or external dependencies`,
    hint: "(example scopes: gulp, broccoli, npm)"
  },
  {
    name: "fix",
    message: `${theme.header("Fix")}: A bug fix`
  },
  {
    name: "perf",
    message: `${theme.header("Perf")}: A code change that improves performance`
  },
  {
    name: "ci",
    message: `${theme.header(
      "CI"
    )}: Changes to our CI configuration files and scripts`,
    hint: "(example scopes: Travis, Circle, BrowserStack, SauceLabs)"
  },
  {
    name: "refactor",
    message: `${theme.header(
      "Refactor"
    )}: A code change that neither fixes a bug nor adds a feature`
  },
  {
    name: "style",
    message: `${theme.header(
      "Style"
    )}: Changes that do not affect the meaning of the code`,
    hint: "(white-space, formatting, missing semi-colons, etc)"
  },
  {
    name: "docs",
    message: `${theme.header("Docs")}: Documentation only changes`,
    hint: "(Inline document or website document)"
  },
  {
    name: "revert",
    message: `${theme.header("Revert")}: the commit reverts a previous commit.`,
    hint: `In the body it should say: ${theme.code(
      "This reverts commit <hash>"
    )}`
  },
  {
    name: "test",
    message: `${theme.header(
      "Test"
    )}: Adding missing tests or correcting existing tests`
  },
  {
    name: "chore",
    message: `${theme.header(
      "Chore"
    )}: Other changes that don't modify src or test files`
  }
];
