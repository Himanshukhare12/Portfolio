import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

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
      className="p-2 text-lg text-secondary-600 dark:text-secondary-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-300"
      title="Toggle Theme"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 shadow-elegant z-50">
      <div className="w-full px-6 md:px-20 flex items-center justify-between py-4">
        {/* Professional Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent tracking-wide">
          &lt;HK/&gt;
        </div>

        {/* Navigation + Theme */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex space-x-6 text-sm text-secondary-600 dark:text-secondary-300 font-medium">
            <a href="#hero" className="hover:text-primary-500 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20">Home</a>
            <a href="#about" className="hover:text-primary-500 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20">About</a>
            <a href="#projects" className="hover:text-primary-500 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20">Projects</a>
            <a href="#skills" className="hover:text-primary-500 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20">Skills</a>
            <a href="#education" className="hover:text-primary-500 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20">Education</a>
            <a href="#contact" className="hover:text-primary-500 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}