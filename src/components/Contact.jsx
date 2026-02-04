import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const contactMethods = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "himanshu-khare",
      href: "https://linkedin.com/in/himanshu-khare",
      color: "text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "hkhare248@gmail.com",
      href: "mailto:hkhare248@gmail.com",
      color: "text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 9151617551",
      href: "tel:+919151617551",
      color: "text-violet-600 hover:text-violet-500 dark:text-violet-400 dark:hover:text-violet-300"
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen pt-24 px-6 md:px-20 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 flex items-center"
    >
      <div className="w-full max-w-3xl mx-auto text-center">
        {/* Header */}
        <div className="mb-20">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3 tracking-widest uppercase font-medium">
            LET'S CONNECT
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-br from-neutral-900 via-neutral-700 to-neutral-500 dark:from-white dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent mb-10">
            Contact Me
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-neutral-800 dark:text-neutral-100">
            Ready to bring your <span className="text-violet-500 dark:text-violet-400">ideas</span> to life?
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group block p-6 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 hover:border-violet-500/50 dark:hover:border-violet-400/50 transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/80 hover:scale-105 shadow-sm hover:shadow-md dark:shadow-none ${method.color}`}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-14 h-14 rounded-xl bg-neutral-100 dark:bg-neutral-700/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="text-2xl" />
                </div>
                <div className="flex-1">
                  <span className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-current block">
                    {method.label}
                  </span>
                  {method.value && (
                    <span className="text-base text-neutral-600 dark:text-neutral-400 font-medium block mt-1">
                      {method.value}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}