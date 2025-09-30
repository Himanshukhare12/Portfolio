
const educationData = [
  {
    title: "Bachelor of Engineering in Computer Science",
    institution: "IET DAVV",
    duration: "2023 – 2027",
    description:
      "Currently pursuing a B.E. in Computer Science with focus on software development, algorithms, and data structures.",
    highlight: "CGPA: 7.9/10",
  },
  {
    title: "ISC (Class XII)",
    institution: "ISC School",
    duration: "2021 – 2022",
    description:
      "Completed higher secondary education with focus on Mathematics, Physics, and Computer Science.",
    highlight: "Percentage: 85%",
  },
  {
    title: "ICSE (Class X)",
    institution: "ICSE School",
    duration: "2019 – 2020",
    description:
      "Completed secondary education with distinction in Mathematics and Science.",
    highlight: "Percentage: 93%",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen pt-24 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white flex items-center"
    >
      <div className="w-full space-y-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 w-max">
          Education
        </h2>

        {/* Education Cards */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 transition hover:shadow-lg"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
                    {edu.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.institution}
                  </p>
                </div>
                <p className="text-sm text-gray-400">{edu.duration}</p>
              </div>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                {edu.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-yellow-600 font-medium mt-2">
                {edu.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
