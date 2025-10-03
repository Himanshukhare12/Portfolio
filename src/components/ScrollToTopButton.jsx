import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 hidden sm:block ${
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-4 scale-90 pointer-events-none"
      }`}
    >
      {/* Progress Ring */}
      <div className="relative">
        <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 36 36">
          {/* Background Circle */}
          <path
            className="text-gray-300 dark:text-gray-600"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          {/* Progress Circle */}
          <path
            className="text-primary"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={`${scrollProgress}, 100`}
            strokeLinecap="round"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            style={{
              transition: 'stroke-dasharray 0.1s ease-in-out',
            }}
          />
        </svg>
        
        {/* Button */}
        <button
          onClick={scrollToTop}
          className="absolute inset-0 m-1 bg-white/10 dark:bg-gray-800/20 backdrop-blur-md text-primary dark:text-primary-400 rounded-full shadow-lg hover:shadow-xl hover:scale-110 hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-300 border border-white/20 dark:border-gray-700/30 group"
          aria-label="Scroll to top"
        >
          <FaArrowUp 
            className="w-4 h-4 group-hover:animate-bounce" 
            style={{ margin: 'auto' }}
          />
        </button>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Back to top
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
      </div>
    </div>
  );
}
