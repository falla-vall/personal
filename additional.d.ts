declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      WAKATIME_API: string;
    }
  }
}

declare module "github-contribution-stats";
