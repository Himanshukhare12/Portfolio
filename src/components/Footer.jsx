export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black py-6 px-6 md:px-20 text-center text-sm text-gray-600 dark:text-gray-400">

      <p>
        © {new Date().getFullYear()} Himanshu Khare. Built with 💙 using React & Tailwind CSS.
      </p>
    </footer>
  );
}
