import { createRouter } from "./context";

export const quotesRouter = createRouter().query("random", {
  async resolve({ ctx }) {
    return await ctx
      .get("https://api.quotable.io/random?tags=technology,famous-quotes")
      .then((res) => res.data);
  },
});
