import { theme } from "./theme";
import { committType } from "../constants/type";

export default {
  type: "autocomplete",
  name: "type",
  message: `Choose your ${theme.highlight("commit type")}!`,
  styles: { primary: theme.selected },
  highlight: theme.search.highlight,
  suggest(typed: string, choices: any[]) {
    return choices.filter(choice => {
      const t = typed.toLowerCase();
      if (choice.name.toLowerCase().includes(t)) return true;
      return choice.message.toLowerCase().includes(` ${typed.toLowerCase()}`);
    });
  },
  choices: committType
};
