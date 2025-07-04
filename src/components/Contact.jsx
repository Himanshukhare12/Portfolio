import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen pt-24 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white flex items-center"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT SIDE: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-lg text-primary" />
              <span>Email: hkhare248@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-lg text-primary" />
              <span>Location: Indore, Madhya Pradesh, India</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-2xl pt-4 text-gray-700 dark:text-gray-300">
            <a
              href="https://github.com/Himanshukhare12"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/himanshu-khare-33b63a279"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Contact Form (UI only) */}
        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full p-3 border rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Message
            </label>
            <textarea
              placeholder="Your message..."
              rows="4"
              className="w-full p-3 border rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white w-full py-3 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
