export type HelpIndexType = {
  usage: string;
  example: {
    command: string;
    desc?: string;
    description?: string;
  };
  epilog: string;
  strict: boolean;
};

export default {
  usage: "Usage: $0",
  example: {
    command: "$0",
    desc: "Commit"
  },
  epilog: "2018©",
  strict: true
} as HelpIndexType;
