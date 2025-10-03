import { FaHeart, FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="px-6 md:px-20 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                &lt;HK/&gt;
              </div>
              <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                Frontend Developer passionate about creating exceptional digital experiences through clean code and innovative solutions.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Himanshukhare12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-secondary-600 dark:text-secondary-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-300"
                  title="GitHub"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://linkedin.com/in/himanshu-khare-33b63a279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-secondary-600 dark:text-secondary-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-300"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-lg" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
                Quick Links
              </h3>
              <nav className="flex flex-col space-y-2">
                {[
                  { name: 'Home', href: '#hero' },
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Education', href: '#education' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-secondary-600 dark:text-secondary-300 hover:text-primary-500 transition-colors duration-300 w-fit"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
                Get In Touch
              </h3>
              <div className="space-y-2 text-secondary-600 dark:text-secondary-300">
                <p>📧 hkhare248@gmail.com</p>
                <p>📍 Indore, Madhya Pradesh, India</p>
                <p>💼 Available for opportunities</p>
              </div>
              <a
                href="#contact"
                className="inline-block px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
              >
                Let's Connect
              </a>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-neutral-200 dark:border-neutral-800 my-8"></div>
          
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-secondary-600 dark:text-secondary-300">
              <span>© {new Date().getFullYear()} Himanshu Khare. Built with</span>
              <FaHeart className="text-red-500 animate-professional-pulse text-xs" />
              <span>using React & Tailwind CSS.</span>
            </div>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-secondary-600 dark:text-secondary-300 hover:text-primary-500 rounded-lg transition-all duration-300 text-sm font-medium"
              title="Back to top"
            >
              <span>Back to Top</span>
              <FaArrowUp className="text-xs group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}