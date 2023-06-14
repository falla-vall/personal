import { searchPhotos } from "@flla/app/api/unsplash/photos/get-photos";
import { getPhotoQuery } from "@flla/utils/string";
import Brand from "@flla/components/brand";

export default async function Home() {
  const photos = (await searchPhotos(getPhotoQuery())).results;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Brand results={photos} />
    </main>
  );
}
