/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional Color Palette
        primary: {
          50: '#F0F9FF',
          100: '#E0F2FE', 
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',  // Main primary
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          950: '#0F172A',  // Deep navy
        },
        secondary: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',  // Main secondary
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        accent: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',  // Main accent
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        neutral: {
          50: '#FAFAFA',   // Light background
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',  // Dark background
        },
        // Legacy support
        dark: '#0F172A',
        text: '#1F2937',
        muted: '#64748B',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'elegant': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elegant-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elegant-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'fade-in': 'fade-in 1s ease-out both',
        'fade-in-delay': 'fade-in 1s ease-out 0.6s both',
        'fade-in-delay-2': 'fade-in 1s ease-out 1s both',
        'slide-up': 'slide-up 1s ease-out both',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-out': 'fade-in-out 4s ease-in-out infinite',
        'professional-pulse': 'professional-pulse 2s ease-in-out infinite',
        'professional-bounce': 'professional-bounce 2s ease-in-out infinite',
        'gradient-professional': 'gradient-professional 3s ease infinite',
        'typing-professional': 'typing-professional 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'fade-in-up': 'fade-in-up 1s ease-out both',
        'fade-in-up-delay-1': 'fade-in-up 1s ease-out 0.3s both',
        'fade-in-up-delay-2': 'fade-in-up 1s ease-out 0.6s both',
        'fade-in-up-delay-3': 'fade-in-up 1s ease-out 0.9s both',
        'professional-float': 'professional-float 4s ease-in-out infinite',
        'slow-drift': 'slow-drift 8s ease-in-out infinite',
        'light-beam': 'light-beam 3s ease-in-out infinite',
        'horizontal-beam': 'horizontal-beam 4s ease-in-out infinite',
        'particle-float': 'particle-float 6s ease-in-out infinite',
        'particle-drift': 'particle-drift 8s linear infinite',
        'slow-rotate': 'slow-rotate 20s linear infinite',
        'reverse-rotate': 'reverse-rotate 15s linear infinite reverse',
        'mesh-rotate': 'mesh-rotate 25s linear infinite',
        'mesh-counter-rotate': 'mesh-counter-rotate 30s linear infinite reverse',
        'wave-subtle': 'wave-subtle 6s ease-in-out infinite',
        'wave-counter': 'wave-counter 8s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'fade-in': {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-out': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        'slide-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'professional-pulse': {
          '0%, 100%': { 
            opacity: '0.5',
            transform: 'scale(1)' 
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.05)' 
          },
        },
        'professional-bounce': {
          '0%, 100%': { 
            transform: 'translateY(0px) scale(1)',
            opacity: '0.7' 
          },
          '50%': { 
            transform: 'translateY(-5px) scale(1.1)',
            opacity: '1' 
          },
        },
        'gradient-professional': {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
        },
        'typing-professional': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#0EA5E9' },
        },
        'professional-float': {
          '0%, 100%': { 
            transform: 'translateY(0px) scale(1)',
            opacity: '0.6' 
          },
          '50%': { 
            transform: 'translateY(-15px) scale(1.02)',
            opacity: '0.8' 
          },
        },
        'slow-drift': {
          '0%, 100%': { 
            transform: 'translate(0px, 0px) rotate(0deg)' 
          },
          '33%': { 
            transform: 'translate(10px, -10px) rotate(120deg)' 
          },
          '66%': { 
            transform: 'translate(-5px, 5px) rotate(240deg)' 
          },
        },
        'light-beam': {
          '0%, 100%': { 
            opacity: '0.1',
            transform: 'scaleY(1)' 
          },
          '50%': { 
            opacity: '0.3',
            transform: 'scaleY(1.2)' 
          },
        },
        'horizontal-beam': {
          '0%, 100%': { 
            opacity: '0.1',
            transform: 'scaleX(1)' 
          },
          '50%': { 
            opacity: '0.25',
            transform: 'scaleX(1.3)' 
          },
        },
        'particle-float': {
          '0%, 100%': { 
            transform: 'translateY(0px)',
            opacity: '0.3' 
          },
          '50%': { 
            transform: 'translateY(-20px)',
            opacity: '0.6' 
          },
        },
        'particle-drift': {
          '0%': { 
            transform: 'translateX(0px) rotate(0deg)',
            opacity: '0' 
          },
          '10%, 90%': { 
            opacity: '0.4' 
          },
          '100%': { 
            transform: 'translateX(100px) rotate(360deg)',
            opacity: '0' 
          },
        },
        'slow-rotate': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'reverse-rotate': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
        'mesh-rotate': {
          'from': { transform: 'rotate(45deg)' },
          'to': { transform: 'rotate(405deg)' },
        },
        'mesh-counter-rotate': {
          'from': { transform: 'rotate(-45deg)' },
          'to': { transform: 'rotate(-405deg)' },
        },
        'wave-subtle': {
          '0%, 100%': { 
            transform: 'skew(12deg) translateX(0px)',
            opacity: '0.1' 
          },
          '50%': { 
            transform: 'skew(15deg) translateX(10px)',
            opacity: '0.15' 
          },
        },
        'wave-counter': {
          '0%, 100%': { 
            transform: 'skew(-6deg) translateX(0px)',
            opacity: '0.08' 
          },
          '50%': { 
            transform: 'skew(-9deg) translateX(-8px)',
            opacity: '0.12' 
          },
        },
      },
    },
  },
  plugins: [],
}
