import { useEffect, useState } from "react";
import { cookies } from "next/headers";

export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const cookieThemeMode = cookies().get("theme")?.value;
    if (cookieThemeMode) {
      setThemeMode(cookieThemeMode as "light" | "dark");
    }
  }, []);

  const toggleThemeMode = () => {
    const newThemeMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newThemeMode);
    cookies().set("theme", newThemeMode);
  };

  return { themeMode, toggleThemeMode };
};
