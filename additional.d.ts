declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
    }
  }
}
namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    GOOGLE_CLIENT_ID: string;
    PUBLIC_URL: string;
    GITHUB_TOKEN: string;
    WAKATIME_API: string;
  }
}

declare module "github-contribution-stats";
