"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = mounted ? theme : undefined;

  return (
    <div className="flex items-center gap-1">
      <Button
        type="button"
        variant={activeTheme === "light" ? "secondary" : "ghost"}
        size="icon"
        onClick={() => setTheme("light")}
        aria-label="Ativar tema claro"
      >
        <SunIcon />
      </Button>
      <Button
        type="button"
        variant={activeTheme === "dark" ? "secondary" : "ghost"}
        size="icon"
        onClick={() => setTheme("dark")}
        aria-label="Ativar tema escuro"
      >
        <MoonIcon />
      </Button>
    </div>
  );
}

export { ThemeToggle };
