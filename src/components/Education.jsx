import { FaGraduationCap, FaTrophy, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const educationData = [
  {
    title: "Bachelor of Engineering in Computer Science",
    institution: "IET DAVV",
    location: "Indore, Madhya Pradesh",
    duration: "2023 – 2027",
    description: "Currently pursuing a B.E. in Computer Science with focus on software development, algorithms, and data structures. Active in coding competitions and technical events.",
    highlight: "CGPA: 8.2/10",
    status: "current",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Web Development Fundamentals"
    ]
  },
  {
    title: "ISC (Class XII)",
    institution: "ISC School",
    location: "India",
    duration: "2021 – 2022",
    description: "Completed higher secondary education with focus on Mathematics, Physics, and Computer Science. Developed strong analytical and problem-solving foundation.",
    highlight: "Percentage: 93%",
    status: "completed",
    coursework: [
      "Advanced Mathematics",
      "Computer Science Fundamentals",
      "Physics & Applied Sciences",
      "Programming Basics"
    ]
  },
  {
    title: "ICSE (Class X)",
    institution: "ICSE School",
    location: "India",
    duration: "2019 – 2020",
    description: "Completed secondary education with distinction in Mathematics and Science. Built fundamental knowledge in core subjects.",
    highlight: "Percentage: 85%",
    status: "completed",
    coursework: [
      "Mathematics & Statistics",
      "Science & Technology",
      "Computer Applications",
      "Analytical Problem Solving"
    ]
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen pt-24 px-6 md:px-20 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 flex items-center"
    >
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="section-title bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
            Education Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-6"></div>
          <p className="section-subtitle max-w-2xl mx-auto">
            My academic background and continuous learning path in computer science and technology
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-secondary-500 rounded-full"></div>
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full border-4 border-white dark:border-neutral-950 shadow-elegant flex items-center justify-center z-10">
                  <FaGraduationCap className="text-white text-sm" />
                </div>
                
                {/* Education Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="professional-card p-6 group hover:shadow-elegant-xl transition-all duration-500">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'current'
                          ? 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300'
                          : 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                      }`}>
                        {edu.status === 'current' ? (
                          <>
                            <div className="w-2 h-2 bg-accent-500 rounded-full animate-professional-pulse"></div>
                            Current
                          </>
                        ) : (
                          <>
                            <FaTrophy className="text-primary-500" />
                            Completed
                          </>
                        )}
                      </span>
                      
                      <div className="flex items-center gap-2 text-xs text-secondary-500 dark:text-secondary-400">
                        <FaCalendarAlt />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    
                    {/* Institution Info */}
                    <div className="mb-4">
                      <h3 className="font-bold text-xl text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {edu.title}
                      </h3>
                      <div className="flex items-center gap-4 text-secondary-600 dark:text-secondary-300">
                        <div className="font-semibold">{edu.institution}</div>
                        <div className="flex items-center gap-1 text-sm">
                          <FaMapMarkerAlt className="text-accent-500" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-secondary-600 dark:text-secondary-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    {/* Highlight */}
                    <div className="bg-gradient-to-r from-accent-50 to-primary-50 dark:from-accent-900/20 dark:to-primary-900/20 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 text-accent-700 dark:text-accent-300 font-semibold">
                        <FaTrophy className="text-accent-500" />
                        {edu.highlight}
                      </div>
                    </div>
                    
                    {/* Relevant Coursework */}
                    <div>
                      <h4 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100 mb-2">Relevant Coursework:</h4>
                      <ul className="space-y-1">
                        {edu.coursework.map((course, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-secondary-600 dark:text-secondary-300">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <div className="text-center mt-16">
          <div className="professional-card p-8 max-w-2xl mx-auto">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="text-white text-2xl" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Continuous Learning
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              Always eager to learn new technologies and expand my knowledge in computer science, web development, and emerging tech trends.
            </p>
            <a
              href="#contact"
              className="professional-button-primary inline-flex items-center gap-3 group"
            >
              <span>Let's Connect</span>
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