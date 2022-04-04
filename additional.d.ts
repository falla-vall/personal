declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      WAKATIME_API: string;
    }
  }
}
namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    GOOGLE_CLIENT_ID: string;
  }
}

declare module "github-contribution-stats";
