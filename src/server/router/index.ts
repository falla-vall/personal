// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";
import { quotesRouter } from "./quotes";
import { wakatimeRouter } from "./wakatime";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("auth.", protectedExampleRouter)
  .merge("quotes.", quotesRouter)
  .merge("wakatime.", wakatimeRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
