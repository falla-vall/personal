import config from "@flla/configs/env";

import type { SearchPhotosResponse } from "@flla/app/api/unsplash/photos/photos";

export const runtime = "edge";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const params = url.searchParams;
  const baseUrl = `${config.unsplash.apiUrl}/search/photos`;
  const headers = {
    Authorization: `Client-ID ${config.unsplash.accessKey}`,
    "Accept-Version": "v1",
  };
  const options = {
    headers,
  };
  const response = await fetch(`${baseUrl}?${params.toString()}`, options);
  const data = (await response.json()) as SearchPhotosResponse;
  return new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json" },
  });
};
