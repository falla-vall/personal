import { PHOTO_QUERIES } from "@flla/constants/photos";

export const getPhotoQuery = () => {
  const randomIndex = Math.floor(Math.random() * PHOTO_QUERIES.length);
  return PHOTO_QUERIES[randomIndex];
};
