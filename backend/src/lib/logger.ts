import pino from "pino";
import { env } from "../config/env.ts";

export const logger = pino({
  level: env.logLevel,
  ...(!env.isProduction && {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "SYS:standard",
      },
    },
  }),
});