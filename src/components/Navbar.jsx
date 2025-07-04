import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-xl text-gray-600 dark:text-gray-300 hover:text-primary transition"
      title="Toggle Theme"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow z-50">
      <div className="w-full px-6 md:px-20 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-primary tracking-wide">
          &lt;HK/&gt;
        </div>

        {/* Navigation + Theme */}
        <div className="flex items-center gap-6">
          <nav className="space-x-4 text-sm text-gray-600 dark:text-gray-300 font-medium">
            <a href="#hero" className="hover:text-primary">Home</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#projects" className="hover:text-primary">Projects</a>
            <a href="#skills" className="hover:text-primary">Skills</a>
            <a href="#education" className="hover:text-primary">Education</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
