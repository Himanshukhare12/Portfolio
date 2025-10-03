import CodeSnippet from './CodeSnippet';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen pt-24 px-6 md:px-20 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 flex items-center"
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* LEFT SIDE */}
        <div className="lg:w-1/2 space-y-8 text-left animate-slide-in-left">
          <div className="space-y-4">
            <h2 className="section-title bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
          </div>

          <div className="space-y-6">
            <p className="section-subtitle leading-relaxed">
              I'm Himanshu Khare, a passionate Computer Science student at <span className="font-semibold text-primary-600 dark:text-primary-400">IET DAVV Indore</span> and a Frontend developer dedicated to building efficient, scalable solutions.
            </p>

            <p className="text-base md:text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
              I specialize in <span className="font-semibold text-accent-600 dark:text-accent-400">React.js</span>, <span className="font-semibold text-accent-600 dark:text-accent-400">Tailwind CSS</span>, and <span className="font-semibold text-accent-600 dark:text-accent-400">Firebase</span>, with a strong foundation in Java and C++. My competitive programming journey includes solving 300+ DSA problems and achieving a 2-star rating on CodeChef.
            </p>
          </div>

          <div className="professional-card p-6">
            <h3 className="font-bold text-xl text-neutral-900 dark:text-neutral-100 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
              Key Achievements
            </h3>
            <ul className="space-y-3 text-secondary-600 dark:text-secondary-300">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 rounded-full flex items-center justify-center text-sm font-bold">🏆</span>
                <span>2nd place in Code Quest by GDG</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">⭐</span>
                <span>2-Star rating on CodeChef</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 rounded-full flex items-center justify-center text-sm font-bold">📈</span>
                <span>300+ Problems Solved on Competitive Platforms</span>
              </li>
            </ul>
          </div>

          <a
            href="#contact"
            className="professional-button-primary inline-flex items-center gap-3 group"
          >
            <span>Get In Touch</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* RIGHT SIDE - Interactive Code Snippet */}
        <div className="lg:w-1/2 animate-slide-in-right w-full">
          <CodeSnippet 
            language="java"
            fileName="AboutMe.java"
            maxHeight="300px"
            code={`public class AboutMe {
    private String name = "Himanshu Khare";
    private String role = "Frontend Developer & Problem Solver";
    private String education = "B.E. Computer Science - IET DAVV Indore";
    private String[] technologies = {
        "Java", "C++", "JavaScript", "React.js",
        "Tailwind CSS", "Firebase", "Node.js", "MongoDB"
    };
    private String[] achievements = {
        "2nd place in Code Quest by GDG",
        "2-Star rating on CodeChef",
        "300+ Problems Solved",
        "Multiple full-stack projects"
    };
    private boolean problemSolver = true;
    private boolean availableForHire = true;
    private String location = "Indore, India";
    
    public AboutMe() {
        System.out.println("Welcome to my portfolio!");
        this.displayInfo();
    }
    
    public void displayInfo() {
        System.out.println("Hi, I'm " + this.name);
        System.out.println("Role: " + this.role);
        System.out.println("Education: " + this.education);
        System.out.println("Location: " + this.location);
        
        System.out.println("\nTechnologies I work with:");
        for (String tech : this.technologies) {
            System.out.println("- " + tech);
        }
        
        System.out.println("\nKey Achievements:");
        for (String achievement : this.achievements) {
            System.out.println("🏆 " + achievement);
        }
    }
    
    public String getMotivation() {
        return "Passionate about creating efficient, scalable solutions " +
               "and solving complex problems through code.";
    }
    
    public boolean isReadyToWork() {
        return this.problemSolver && this.availableForHire;
    }
    
    public void connectWithMe() {
        System.out.println("Let's build something amazing together!");
        System.out.println("Feel free to reach out through my portfolio.");
    }
    
    public static void main(String[] args) {
        AboutMe developer = new AboutMe();
        System.out.println("\nMotivation: " + developer.getMotivation());
        
        if (developer.isReadyToWork()) {
            developer.connectWithMe();
        }
    }
}`}
          />
        </div>
      </div>
    </section>
  );
}