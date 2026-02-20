import { FaGithub, FaLinkedin, FaCode, FaDownload, FaArrowRight } from 'react-icons/fa';
import { HiSparkles, HiLocationMarker } from 'react-icons/hi';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-24 px-6 md:px-20 bg-gradient-to-br from-neutral-50 via-primary-50/30 to-accent-50/20 dark:from-neutral-950 dark:via-primary-950/50 dark:to-accent-950/30 text-neutral-900 dark:text-neutral-50 flex items-center relative overflow-hidden"
    >
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/20 dark:bg-primary-800/10 rounded-full blur-3xl animate-professional-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200/20 dark:bg-accent-800/10 rounded-full blur-3xl animate-professional-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-200/10 to-accent-200/10 dark:from-primary-800/5 dark:to-accent-800/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Professional Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Elegant Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary-400/10 via-accent-400/15 to-transparent rounded-full blur-xl animate-float delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-tl from-accent-400/10 via-primary-400/15 to-transparent rounded-full blur-lg animate-professional-float delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-primary-300/8 to-accent-300/12 rounded-full blur-md animate-slow-drift delay-3000"></div>
        
        {/* Sophisticated Light Rays */}
        <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-primary-400/20 via-primary-400/5 to-transparent animate-light-beam delay-500"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-32 bg-gradient-to-t from-accent-400/20 via-accent-400/5 to-transparent animate-light-beam delay-1500"></div>
        <div className="absolute top-1/3 right-0 w-28 h-px bg-gradient-to-l from-primary-400/15 via-accent-400/10 to-transparent animate-horizontal-beam delay-2500"></div>
        
        {/* Elegant Particle System */}
        <div className="absolute top-20 left-1/3 w-2 h-2 bg-primary-400/30 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute top-40 right-1/4 w-1.5 h-1.5 bg-accent-400/40 rounded-full animate-particle-drift delay-2000"></div>
        <div className="absolute bottom-32 left-1/5 w-2.5 h-2.5 bg-primary-300/25 rounded-full animate-particle-float delay-3000"></div>
        <div className="absolute bottom-48 right-1/5 w-1 h-1 bg-accent-300/35 rounded-full animate-particle-drift delay-1500"></div>
        <div className="absolute top-3/4 left-1/6 w-1.5 h-1.5 bg-primary-400/30 rounded-full animate-particle-float delay-2500"></div>
        
        {/* Minimalist Geometric Elements */}
        <div className="absolute top-1/3 left-1/6 w-16 h-16 border border-primary-400/15 rounded-full animate-slow-rotate"></div>
        <div className="absolute bottom-1/4 right-1/6 w-12 h-12 border border-accent-400/15 rotate-45 animate-reverse-rotate delay-1000"></div>
        
        {/* Subtle Mesh Pattern */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-transparent to-accent-400 transform rotate-45 animate-mesh-rotate"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-accent-400 via-transparent to-primary-400 transform -rotate-45 animate-mesh-counter-rotate"></div>
          </div>
        </div>
        
        {/* Elegant Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-t from-primary-400/20 to-transparent transform skew-x-12 animate-wave-subtle"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-accent-400/15 to-transparent transform -skew-x-6 animate-wave-counter delay-1000"></div>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* Centered Content Layout */}
        <div className="text-center space-y-8">
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-700/50 rounded-full px-6 py-3 text-sm font-medium shadow-elegant animate-fade-in-up">
            <HiLocationMarker className="text-primary-500" />
            <span className="text-neutral-700 dark:text-neutral-300">
              Available for opportunities
            </span>
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-professional-pulse"></div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in-up-delay-1">
              <span className="block text-neutral-900 dark:text-neutral-100 mb-4">Hello, I'm</span>
              <span className="block bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent animate-gradient-professional">
                Himanshu Khare
              </span>
            </h1>
            
            {/* Professional Subtitle */}
            <div className="h-20 md:h-20 flex justify-center items-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary-600 dark:text-secondary-300 text-center">
                {/* Desktop: Horizontal Layout */}
                <div className="hidden sm:block animate-typing-professional overflow-hidden whitespace-nowrap">
                  Full-Stack Developer & Problem Solver
                </div>
                {/* Mobile Only: Vertical Layout */}
                <div className="block sm:hidden space-y-1">
                  <div className="overflow-hidden whitespace-nowrap" style={{
                    animation: 'typing-professional 1.5s steps(18, end) both'
                  }}>Full-Stack Developer</div>
                  <div className="overflow-hidden whitespace-nowrap opacity-0" style={{
                    animation: 'fade-in-up 0.3s ease-out 1.7s both, typing-professional 1.2s steps(18, end) 2s both'
                  }}>& Problem Solver</div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6 animate-fade-in-up-delay-2 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 leading-relaxed">
              Passionate Computer Science student specializing in modern web technologies and competitive programming.
            </p>
            <p className="text-lg md:text-xl text-secondary-500 dark:text-secondary-400">
              Building scalable solutions with <span className="font-semibold text-accent-600 dark:text-accent-400">React.js</span>, 
              <span className="font-semibold text-accent-600 dark:text-accent-400"> Java</span>,
              <span className="font-semibold text-accent-600 dark:text-accent-400"> Node.js</span>,
              <span className="font-semibold text-accent-600 dark:text-accent-400"> Express.js</span>, and 
              <span className="font-semibold text-accent-600 dark:text-accent-400"> modern frameworks</span>.
            </p>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 animate-fade-in-up-delay-2">
            <div className="bg-white/70 dark:bg-neutral-800/70 backdrop-blur-sm rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 p-6 hover:scale-105 transition-all duration-300 shadow-elegant">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">1000+</div>
              <div className="text-secondary-500 dark:text-secondary-400 font-medium">Problems Solved</div>
              <div className="text-sm text-secondary-400 dark:text-secondary-500 mt-1">Across multiple platforms</div>
            </div>
            <div className="bg-white/70 dark:bg-neutral-800/70 backdrop-blur-sm rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 p-6 hover:scale-105 transition-all duration-300 shadow-elegant">
              <div className="text-3xl md:text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2">10+</div>
              <div className="text-secondary-500 dark:text-secondary-400 font-medium">Projects Built</div>
              <div className="text-sm text-secondary-400 dark:text-secondary-500 mt-1">Web applications</div>
            </div>
            <div className="bg-white/70 dark:bg-neutral-800/70 backdrop-blur-sm rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 p-6 hover:scale-105 transition-all duration-300 shadow-elegant">
              <div className="text-3xl md:text-4xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">1800+</div>
              <div className="text-secondary-500 dark:text-secondary-400 font-medium">LeetCode Rating</div>
              <div className="text-sm text-secondary-400 dark:text-secondary-500 mt-1">Competitive programming</div>
            </div>
          </div>

          {/* Professional Social Links */}
          <div className="flex flex-wrap justify-center gap-4 items-center animate-fade-in-up-delay-3 mt-10">
            {[
              { href: "https://github.com/Himanshukhare12", src: "/github.svg", alt: "GitHub", title: "GitHub", color: "hover:bg-neutral-100 dark:hover:bg-neutral-800", needsInvert: true },
              { href: "https://linkedin.com/in/himanshu-khare", src: "/linkedin.svg", alt: "LinkedIn", title: "LinkedIn", color: "hover:bg-blue-50 dark:hover:bg-blue-900/20", needsInvert: false },
              { href: "https://www.codechef.com/users/himanshukhare", src: "/codechef.jpg", alt: "CodeChef", title: "CodeChef", rounded: true, color: "hover:bg-orange-50 dark:hover:bg-orange-900/20", needsInvert: false },
              { href: "https://leetcode.com/u/Himanshu_khare/", src: "/leetcode.svg", alt: "LeetCode", title: "LeetCode", color: "hover:bg-yellow-50 dark:hover:bg-yellow-900/20", needsInvert: false },
              { href: "https://codeforces.com/profile/Himanshu_khare", src: "/codeforces.svg", alt: "Codeforces", title: "Codeforces", color: "hover:bg-red-50 dark:hover:bg-red-900/20", needsInvert: false }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.title}
                className={`group p-4 bg-white/70 dark:bg-neutral-800/70 backdrop-blur-sm rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 transition-all duration-300 hover:scale-110 hover:shadow-elegant-lg ${social.color}`}
              >
                <img 
                  src={social.src} 
                  alt={social.alt} 
                  className={`w-7 h-7 transition-all duration-300 group-hover:scale-110 ${social.needsInvert ? 'dark:invert' : ''} ${social.rounded ? 'rounded' : ''}`}
                />
              </a>
            ))}
          </div>

          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mt-12 items-center justify-center animate-fade-in-up-delay-3">
            <a
              href="#projects"
              className="professional-button-primary group relative overflow-hidden px-8 py-4 text-lg"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span>View My Work</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#contact"
              className="professional-button-outline group px-8 py-4 text-lg"
            >
              <span className="flex items-center justify-center gap-3">
                <span>Let's Connect</span>
                <HiSparkles className="group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </a>
            
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="professional-button-secondary group px-8 py-4 text-lg"
            >
              <span className="flex items-center justify-center gap-3">
                <FaDownload className="group-hover:animate-professional-bounce" />
                <span>Resume</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Attractive Scroll Indicator - Bottom Corner */}
      <div className="absolute right-6 bottom-6 opacity-70 hover:opacity-100 transition-all duration-300 animate-professional-bounce">
        <div className="group cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>
          {/* Attractive Mouse Icon */}
          <div className="w-6 h-9 border-2 border-primary-400/70 dark:border-primary-500/70 rounded-full flex justify-center bg-white/70 dark:bg-neutral-800/70 backdrop-blur-md shadow-elegant group-hover:border-primary-500 dark:group-hover:border-primary-400 group-hover:scale-105 transition-all duration-300">
            <div className="w-1 h-2.5 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full mt-2 animate-professional-pulse group-hover:from-primary-400 group-hover:to-accent-400 transition-colors duration-300"></div>
          </div>
          
          {/* Small Scroll Text */}
          <div className="text-xs text-secondary-600 dark:text-secondary-300 font-medium mt-1 text-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
}
