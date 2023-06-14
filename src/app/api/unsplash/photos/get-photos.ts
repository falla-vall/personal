import { getBaseUrl } from "@flla/lib/get-base-url";

import type { SearchPhotosResponse } from "@flla/app/api/unsplash/photos/photos";

import "server-only";

export const searchPhotos = async (query: string) => {
  const res = await fetch(`${getBaseUrl()}/api/unsplash/photos?query=${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return (await res.json()) as SearchPhotosResponse;
};

export const pickRandomPhotoFromSearch = async (query: string) => {
  const { results } = await searchPhotos(query);

  if (!results.length) {
    throw new Error("No photos found");
  }

  const randomIndex = Math.floor(Math.random() * results.length);
  const data = results[randomIndex];

  return data.urls.regular;
};
