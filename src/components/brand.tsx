"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";

import type { SearchPhotosResult } from "@flla/app/api/unsplash/photos/photos";

interface BrandProps {
  results: SearchPhotosResult[];
}

const Brand: React.FC<BrandProps> = ({ results }) => {
  const [photo, setPhoto] = useState(results[0]);

  // unique colors
  const colors = results
    .map((photo) => photo.color)
    .filter((color, index, self) => self.indexOf(color) === index);

  // change photo every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * results.length);
      setPhoto(results[index]);
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
        "place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] after:animate-spin-translate",
      )}
      style={{
        backgroundImage: `url(${photo.urls.regular})`,
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
