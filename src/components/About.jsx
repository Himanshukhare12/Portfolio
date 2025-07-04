export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen pt-24 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white flex items-center"
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 space-y-6 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">About Me</h2>

          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
            I’m Himanshu Khare, a passionate Computer Science student at IET DAVV Indore and a full-stack web developer with a focus on building efficient, scalable solutions. I specialize in React.js, Tailwind CSS, and Firebase, and have a strong foundation in Java and C++.
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
            With over 300 DSA problems solved and a 2-star rating on CodeChef, I actively sharpen my problem-solving skills through competitive programming. Driven by curiosity and a love for technology, I continuously explore new tools and challenges to grow as a developer and engineer impactful digital experiences.
          </p>

          <div>
            <h3 className="font-semibold text-black dark:text-white mb-2 text-lg">Achievements</h3>
            <ul className="text-sm md:text-base space-y-1 text-gray-700 dark:text-gray-300">
              <li>✅ 2nd place in Code Quest by GDG</li>
              <li>⭐ 2-Star on CodeChef</li>
              <li>📈 300+ Problems Solved on Competitive Platforms</li>
            </ul>
          </div>

          <a
            href="#contact"
            className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded hover:bg-blue-600 transition text-base"
          >
            Get In Touch
          </a>
        </div>

        {/* RIGHT SIDE:*/}
        <div className="md:w-1/2 shadow-lg rounded-lg bg-gray-100 dark:bg-[#1e293b] p-6 text-sm md:text-base font-mono leading-relaxed text-left overflow-x-auto transition">
          <pre>
<code>
<span className="text-purple-700">class</span> <span className="text-green-700">Developer</span> {'{'}{'\n'}
  <span className="text-blue-700">String</span> name = <span className="text-pink-600">"Himanshu Khare"</span>;<br/>
  <span className="text-blue-700">String</span>[] skills = {'{'}<span className="text-pink-600">"Java"</span>, <span className="text-pink-600">"C++"</span>, <span className="text-pink-600">"React.js"</span>{'}'};<br/>
  <span className="text-blue-700">boolean</span> problemSolver = <span className="text-indigo-600">true</span>;<br/>
  <span className="text-blue-700">int</span> problemsSolved = <span className="text-orange-600">500</span>;<br/>
  <span className="text-blue-700">public String</span> getStatus() {'{'}<br/>
  &nbsp;&nbsp;<span className="text-purple-700">return</span> <span className="text-pink-600">"Coding and learning..."</span>;<br/>
  {'}'}<br/>
{'}'}
</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
