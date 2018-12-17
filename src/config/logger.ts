import { Tracer } from "tracer";

export type OptionalConfig = Tracer.LoggerConfig | undefined;
export type OptionalFileConfig = Tracer.DailyFileConfig | undefined;

export const normalConsoleSetting: OptionalConfig = undefined;

export const colorConsoleSetting: OptionalConfig = {
  format: `"{{timestamp}} <{{title}}> {{message}}"`
};

export const fileSetting: OptionalFileConfig = undefined;
