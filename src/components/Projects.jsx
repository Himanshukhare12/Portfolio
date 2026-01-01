import { FaGithub, FaExternalLinkAlt, FaCode, FaStar } from 'react-icons/fa';

const projects = [
  {
    title: 'BlogVerse',
    description: 'A comprehensive full-stack blogging platform featuring user authentication, rich-text editing, and complete CRUD operations for seamless content management.',
    image: '/blog.svg', 
    tags: ['React.js', 'Tailwind CSS', 'Appwrite', 'Redux Toolkit', 'TinyMCE'],
    live: 'https://blog-verse-cyan.vercel.app/',
    github: 'https://github.com/Himanshukhare12/BlogVerse',
    featured: true
  },
  {
    title: 'Realtime Whiteboard',
    description: 'An interactive collaborative whiteboard application enabling real-time drawing and multi-user collaboration with Socket.io integration.',
    image: '/whiteboard.svg',
    tags: ['HTML', 'Socket.io', 'CSS', 'Node.js'],
    live: 'https://realtime-whiteboard-uvcg.onrender.com/',
    github: 'https://github.com/Himanshukhare12/Realtime-Whiteboard',
    featured: true
  },
  {
    title: 'Sheetify',
    description: 'A feature-rich web-based spreadsheet application with advanced formula evaluation, cell styling, and data export capabilities.',
    image: '/excel.svg',
    tags: ['JavaScript', 'HTML', 'CSS', 'DOM Manipulation'],
    live: 'https://himanshukhare12.github.io/Excel-clone/',
    github: 'https://github.com/Himanshukhare12/Excel-clone',
    featured: false
  },
  {
    title: 'Media Player',
    description: 'A modern custom media player with intuitive playlist management, advanced playback controls, and responsive design.',
    image: '/mediaplayer.svg',
    tags: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://himanshukhare12.github.io/Media-Player/',
    github: 'https://github.com/Himanshukhare12/Media-Player',
    featured: false
  },
];

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section
      id="projects"
      className="min-h-screen pt-24 px-6 md:px-20 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 flex items-center"
    >
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="section-title bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-6"></div>
          <p className="section-subtitle max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8 flex items-center gap-2">
            <FaStar className="text-accent-500" />
            Featured Work
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group professional-card overflow-hidden hover:shadow-elegant-xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-contain p-6 group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-primary-50/50 to-accent-50/50 dark:from-primary-900/20 dark:to-accent-900/20"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="bg-accent-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 text-lg">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-secondary-600 dark:text-secondary-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-300"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-secondary-600 dark:text-secondary-300 hover:text-accent-500 hover:bg-accent-50 dark:hover:bg-accent-900/20 rounded-lg transition-all duration-300"
                        title="View Code"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-secondary-600 dark:text-secondary-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium border border-primary-200/50 dark:border-primary-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8 flex items-center gap-2">
            <FaCode className="text-primary-500" />
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group professional-card hover:shadow-elegant-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(index + 2) * 0.2}s` }}
              >
                <div className="flex items-start gap-4 p-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex gap-2 text-sm">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-secondary-600 dark:text-secondary-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded transition-all duration-300"
                        >
                          <FaExternalLinkAlt />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-secondary-600 dark:text-secondary-300 hover:text-accent-500 hover:bg-accent-50 dark:hover:bg-accent-900/20 rounded transition-all duration-300"
                        >
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-sm text-secondary-600 dark:text-secondary-300 mb-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="professional-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Want to see more?
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              Check out my GitHub profile for more projects and code repositories.
            </p>
            <a
              href="https://github.com/Himanshukhare12"
              target="_blank"
              rel="noopener noreferrer"
              className="professional-button-primary inline-flex items-center gap-3 group"
            >
              <FaGithub />
              <span>View GitHub Profile</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}