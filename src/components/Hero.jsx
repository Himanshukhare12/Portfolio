import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-24 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white flex items-center"
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight">
            Hi, I'm Himanshu Khare
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg lg:text-xl">
            Frontend Developer | Competitive Programmer | Curious Learner
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto md:mx-0">
            Solving real-world problems with structured code and modern technologies.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
            <a href="https://github.com/Himanshukhare12" target="_blank" title="GitHub">
              <img src="/github.png" alt="GitHub" className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://linkedin.com/in/himanshu-khare-33b63a279" target="_blank" title="LinkedIn">
              <img src="/Linkedin.png" alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://www.codechef.com/users/himanshukhare" target="_blank" title="CodeChef">
              <img src="/codechef2.jpg" alt="CodeChef" className="w-6 h-6 rounded hover:scale-110 transition" />
            </a>
            <a href="https://leetcode.com/u/Himanshu_khare/" target="_blank" title="LeetCode">
              <img src="/Leetcode.png" alt="LeetCode" className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://codeforces.com/profile/Himanshu_khare" target="_blank" title="Codeforces">
              <img src="/codeforces.png" alt="Codeforces" className="w-6 h-6 hover:scale-110 transition" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mt-6 items-center justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-primary text-white px-6 py-3 rounded-md shadow hover:bg-blue-600 transition text-base w-full sm:w-auto text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition text-base w-full sm:w-auto text-center"
            >
              Contact Me
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition text-base w-full sm:w-auto text-center"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right Profile */}
        <div className="md:w-1/2 flex justify-center relative">
          <img
            src="/profile.jpg"
            alt="Himanshu Khare"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-2 border-gray-300 dark:border-gray-600"
          />
        </div>
      </div>
    </section>
  );
}
