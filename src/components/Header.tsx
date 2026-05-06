import { Link, useLocation } from "react-router-dom";
import { APP_NAME } from "@/lib/constants";
import { Button } from "./ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Zakat", href: "/zakat" },
  { label: "Mortgage", href: "/mortgage" },
  { label: "Investment", href: "/investment" },
  { label: "Gold & Silver", href: "/gold-zakat" },
];

export function Header() {
  const location = useLocation();
  const { theme, toggleTheme, switchable } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2.5 font-bold text-lg hover:opacity-80 transition-opacity"
          >
            <div className="size-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-sm border border-amber-400/30">
              <span className="text-amber-300 font-bold text-base">
                ☪
              </span>
            </div>
            <span className="hidden sm:inline tracking-tight">{APP_NAME}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.href}
                variant={location.pathname === item.href ? "secondary" : "ghost"}
                size="sm"
                asChild
              >
                <Link to={item.href}>{item.label}</Link>
              </Button>
            ))}
            {switchable && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="ml-2 size-9 p-0"
              >
                {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </Button>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-1">
            {switchable && (
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="size-9 p-0">
                {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="size-9 p-0"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.href}
                variant={location.pathname === item.href ? "secondary" : "ghost"}
                size="sm"
                asChild
                className="justify-start"
                onClick={() => setMobileOpen(false)}
              >
                <Link to={item.href}>{item.label}</Link>
              </Button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
