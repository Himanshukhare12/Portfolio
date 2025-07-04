/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ← ✅ ADD THIS LINE

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',     // Tailwind blue-500
        dark: '#0f172a',
        text: '#1f2937',
        muted: '#6b7280',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
