import { useMounted } from "@/hooks/use-mounted";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  const mounted = useMounted();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light"); // add color scheme to html tag
    } else {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark"); // add color scheme to html tag
    }
  }, [theme]);
  return mounted ? (
    <Button
      role="button"
      onClick={toggleTheme}
      className=" rounded-full"
        variant={"outline"}
      size={"icon"}
    >
      <span className="sr-only">Toggle theme mode</span>
      {theme !== "dark" ? (
        <MoonIcon className="w-[1.2rem] h-[1.2rem]" />
      ) : (
        <SunIcon className="w-[1.2rem] h-[1.2rem]" />
      )}
    </Button>
  ) : (
    <div />
  );
}
