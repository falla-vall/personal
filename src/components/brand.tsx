"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";

import type { SearchPhotosResult } from "@flla/app/api/unsplash/photos/photos";

interface BrandProps {
  results: SearchPhotosResult[];
}

const Brand: React.FC<BrandProps> = ({ results }) => {
  const photos = results.map((result) => result.urls.regular);
  const [photo, setPhoto] = useState(photos[0]);

  // change photo every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * photos.length);
      setPhoto(photos[index]);
    }, 10000);
    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <h3
      className={clsx(
        "text-[16rem] font-bold text-transparent",
        "transition-all duration-200 animate-vertical-infinite",
        "tracking-wide hover:tracking-wider",
        "bg-clip-text bg-repeat-x bg-[length:auto_200%] bg-center",
        "relative flex items-center justify-center",
      )}
      style={{
        backgroundImage: `url(${photo})`,
      }}
    >
      flla.
      <p className="text-moon-48 font-thin mt-96 tracking-normal absolute text-trunks">
        Coming soon.
      </p>
    </h3>
  );
};

export default Brand;
