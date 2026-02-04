const skills = [
  { name: 'Java', icon: '/java.svg', category: 'Programming', needsInvert: false }, // Red/orange Java logo
  { name: 'C++', icon: '/cpp.svg', category: 'Programming', needsInvert: false }, // Blue C++ logo
  { name: 'JavaScript', icon: '/javascript.svg', category: 'Web', needsInvert: false }, // Yellow JS logo
  { name: 'React.js', icon: '/react.svg', category: 'Frontend', needsInvert: false }, // Blue React logo
  { name: 'Firebase', icon: '/firebase.svg', category: 'Backend', needsInvert: false }, // Orange/yellow Firebase logo
  { name: 'SQL', icon: '/sql.svg', category: 'Database', needsInvert: false }, // Usually colored SQL logo
  { name: 'HTML', icon: '/html.svg', category: 'Web', needsInvert: false }, // Orange HTML5 logo
  { name: 'CSS', icon: '/css.svg', category: 'Web', needsInvert: false }, // Blue CSS3 logo
  { name: 'Git', icon: '/Git.svg', category: 'Tools', needsInvert: false }, // Red/orange Git logo - confirmed colored
  { name: 'Tailwind CSS', icon: '/tailwind.svg', category: 'Frontend', needsInvert: false }, // Teal Tailwind logo
  { name: 'Appwrite', icon: '/appwrite.svg', category: 'Backend', needsInvert: false }, // Pink Appwrite logo
  { name: 'GitHub', icon: '/github.svg', category: 'Tools', needsInvert: true }, // Black GitHub logo - needs inversion
  { name: 'Redux Toolkit', icon: '/redux.svg', category: 'Frontend', needsInvert: false }, // Purple Redux logo        
  { name: 'Node.js', icon: '/nodejs.svg', category: 'Backend', needsInvert: false }, // Branded colored logo
  { name: 'Express.js', icon: '/express.svg', category: 'Backend', needsInvert: false }, // Branded colored logo    
];

const categories = {
  'Programming': { color: 'primary', count: 0 },
  'Frontend': { color: 'accent', count: 0 },
  'Backend': { color: 'secondary', count: 0 },
  'Web': { color: 'primary', count: 0 },
  'Database': { color: 'accent', count: 0 },
  'Tools': { color: 'secondary', count: 0 }
};

// Count skills in each category
skills.forEach(skill => {
  if (categories[skill.category]) {
    categories[skill.category].count++;
  }
});

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen pt-24 px-6 md:px-20 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 flex items-center"
    >
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="section-title bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-6"></div>
          <p className="section-subtitle max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {Object.entries(categories).map(([category, data]) => (
            <div key={category} className="professional-card p-4 text-center">
              <div className={`text-2xl font-bold text-${data.color}-600 dark:text-${data.color}-400`}>
                {data.count}
              </div>
              <div className="text-sm text-secondary-600 dark:text-secondary-300">
                {category}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const categoryColor = categories[skill.category]?.color || 'primary';
            return (
              <div
                key={index}
                className="group professional-card p-6 text-center hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${categoryColor}-200/20 to-${categoryColor}-300/20 dark:from-${categoryColor}-800/20 dark:to-${categoryColor}-700/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100`}></div>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`relative w-12 h-12 md:w-14 md:h-14 mx-auto group-hover:scale-110 transition-transform duration-300 ${skill.needsInvert ? 'dark:invert' : ''}`}
                  />
                </div>
                <h3 className="font-semibold text-sm md:text-base text-neutral-900 dark:text-neutral-100 mb-2">
                  {skill.name}
                </h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-${categoryColor}-100 dark:bg-${categoryColor}-900/30 text-${categoryColor}-700 dark:text-${categoryColor}-300`}>
                  {skill.category}
                </span>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="professional-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Always Learning More
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best practices in web development.
            </p>
            <a
              href="#projects"
              className="professional-button-primary inline-flex items-center gap-3 group"
            >
              <span>See My Projects</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}