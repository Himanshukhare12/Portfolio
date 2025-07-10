const skills = [
  { name: 'Java', icon: '/java.svg' },
  { name: 'C++', icon: '/cpp.svg' },
  { name: 'JavaScript', icon: '/javascript.svg' },
  { name: 'React.js', icon: '/react.svg' },
  { name: 'Firebase', icon: '/firebase.svg' },
  { name: 'SQL', icon: '/sql.svg' },
  { name: 'HTML', icon: '/html.svg' },
  { name: 'CSS', icon: '/css.svg' },
  { name: 'Git', icon: '/Git.svg' },
  { name: 'Tailwind CSS', icon: '/tailwind.svg' },
  { name: 'Appwrite', icon: '/appwrite.svg' },
  { name: 'GitHub', icon: '/github.svg' },
  { name: 'Redux Toolkit', icon: '/redux.svg' },         
  { name: 'React Hook Form', icon: '/reacthookform.svg' }, 
  { name: 'React Router', icon: '/reactrout.svg' },     
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen pt-24 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white flex items-center"
    >
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 w-max">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg rounded-lg flex flex-col items-center justify-center py-6 transition"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 md:w-12 md:h-12 mb-3"
              />
              <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-100">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
