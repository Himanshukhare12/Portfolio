import { useState, useEffect } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

export default function CodeSnippet({ 
  code, 
  language = 'java', 
  fileName = 'Developer.java',
  maxHeight = '400px' 
}) {
  const [copied, setCopied] = useState(false);
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Default Java code if none provided
  const defaultCode = `public class Developer {
    private String name = "Himanshu Khare";
    private String role = "Full Stack Developer";
    private String[] skills = {
        "Java", "JavaScript", "React", "Node.js",
        "Spring Boot", "MongoDB", "MySQL", "Git"
    };
    private String location = "India";
    private boolean isAvailableForWork = true;
    
    public Developer() {
        System.out.println("Welcome to my portfolio!");
        this.introduceSelf();
    }
    
    public void introduceSelf() {
        System.out.println("Hi, I'm " + this.name);
        System.out.println("I'm a passionate " + this.role);
        System.out.println("Skills: " + String.join(", ", this.skills));
        
        if (this.isAvailableForWork) {
            System.out.println("🚀 Available for new opportunities!");
        }
    }
    
    public void getInTouch() {
        System.out.println("Let's connect and build something amazing together!");
        return "Contact me through my portfolio";
    }
    
    public static void main(String[] args) {
        Developer developer = new Developer();
        developer.getInTouch();
    }
}`;

  const codeToDisplay = code || defaultCode;

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < codeToDisplay.length && !isComplete) {
      const timeout = setTimeout(() => {
        setDisplayedCode(codeToDisplay.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 3); // Much faster - 3ms per character
      return () => clearTimeout(timeout);
    } else if (currentIndex >= codeToDisplay.length) {
      setIsComplete(true);
    }
  }, [currentIndex, codeToDisplay, isComplete]);

  // Function to complete animation instantly
  const completeAnimation = () => {
    setDisplayedCode(codeToDisplay);
    setCurrentIndex(codeToDisplay.length);
    setIsComplete(true);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeToDisplay);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getLanguageColor = (lang) => {
    const colors = {
      java: 'text-orange-400',
      javascript: 'text-yellow-400',
      python: 'text-blue-400',
      cpp: 'text-purple-400',
      default: 'text-green-400'
    };
    return colors[lang] || colors.default;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Terminal Header */}
      <div className="bg-gray-800 rounded-t-lg p-2 sm:p-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
          {/* Terminal Dots */}
          <div className="flex space-x-1 sm:space-x-2 shrink-0">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
          </div>
          {/* File Name */}
          <span className="text-gray-300 text-xs sm:text-sm font-medium ml-2 sm:ml-4 truncate">{fileName}</span>
        </div>
        
        <div className="flex items-center space-x-1 sm:space-x-2 shrink-0">
          {/* Skip Animation Button - Fixed position in header */}
          {!isComplete && (
            <button
              onClick={completeAnimation}
              className="flex items-center px-2 py-1 bg-primary-600 hover:bg-primary-700 text-white text-xs rounded transition-colors duration-200"
              title="Click to complete typing animation"
            >
              <span className="hidden sm:inline">Click to Complete</span>
              <span className="sm:hidden">Complete</span>
            </button>
          )}
          
          {/* Copy Button */}
          <button
            onClick={copyToClipboard}
            className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors duration-200"
            title="Copy code"
          >
            {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
            <span className="text-xs hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div 
        className="bg-gray-900 rounded-b-lg p-2 sm:p-4 font-mono text-xs sm:text-sm leading-relaxed overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
        style={{ maxHeight }}
      >
        <div 
          className={`flex ${!isComplete ? 'cursor-pointer' : ''}`}
          onClick={!isComplete ? completeAnimation : undefined}
          title={!isComplete ? "Click anywhere to complete animation" : ""}
        >
          {/* Line Numbers */}
          <div className="text-gray-500 text-right pr-2 sm:pr-4 select-none shrink-0 text-xs">
            {displayedCode.split('\n').map((_, index) => (
              <div key={index} className="leading-relaxed">
                {index + 1}
              </div>
            ))}
          </div>
          
          {/* Code */}
          <div className="text-gray-100 overflow-x-auto min-w-0 flex-1">
            <pre className="leading-relaxed whitespace-pre">
              <code className={getLanguageColor(language)}>
                {displayedCode}
                {!isComplete && <span className="animate-pulse">|</span>}
              </code>
            </pre>
          </div>
        </div>
      </div>
      
      {/* Language Badge */}
      <div className="flex justify-between items-center mt-2 sm:mt-3 px-2 sm:px-0">
        <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gray-800 ${getLanguageColor(language)}`}>
          {language.toUpperCase()}
        </span>
        <span className="text-xs text-gray-500">
          {codeToDisplay.split('\n').length} lines
        </span>
      </div>
    </div>
  );
}