import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Realtime Whiteboard',
    description: 'A collaborative whiteboard app with real-time drawing and user interaction.',
    image: '/whiteboard.png',
    tags: ['HTML', 'Socket.io', 'CSS', 'Node.js'],
    live: 'https://realtime-whiteboard-uvcg.onrender.com/',
    github: 'https://github.com/Himanshukhare12/Realtime-Whiteboard',
  },
  {
    title: 'Excel Clone',
    description: 'A web-based spreadsheet with formula evaluation, cell styling, and export features.',
    image: '/excel2.png',
    tags: ['JavaScript', 'HTML', 'CSS', 'DOM Manipulation'],
    live: 'https://himanshukhare12.github.io/Excel-clone/',
    github: 'https://github.com/Himanshukhare12/Excel-clone',
  },
  {
    title: 'Media Player',
    description: 'A custom media player with playlist, playback controls, and responsive design.',
    image: '/media.jpg',
    tags: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://himanshukhare12.github.io/Media-Player/',
    github: 'https://github.com/Himanshukhare12/Media-Player',
  },
  {
    title: 'Weather App',
    description: 'A weather forecast app with location search, current data, and 5-day forecast.',
    image: '/weather.jpg',
    tags: ['HTML', 'Weather API', 'CSS', 'JavaScript'],
    live: 'https://himanshukhare12.github.io/Weather-App/',
    github: 'https://github.com/Himanshukhare12/Weather-App',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen pt-24 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white flex items-center"
    >
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 w-max">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-lg shadow-md transition hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-contain p-4 rounded-t-lg"
              />
              <div className="px-6 pb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg md:text-xl text-black dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-primary text-lg">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs md:text-sm">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded"
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
    </section>
  );
}
