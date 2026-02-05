/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{css,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary backgrounds
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#161616',

        // Glass effects
        'glass': {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          hover: 'rgba(255, 255, 255, 0.08)',
          border: 'rgba(255, 255, 255, 0.1)',
        },

        // Text colors
        'text-primary': '#ffffff',
        'text-secondary': '#a1a1a1',
        'text-muted': '#6b7280',

        // Accent colors
        'accent': {
          blue: '#3b82f6',
          purple: '#8b5cf6',
          green: '#10b981',
          cyan: '#06b6d4',
          orange: '#f97316',
          pink: '#ec4899',
          red: '#ef4444',
          teal: '#14b8a6',
        },
      },

      zIndex: {
        9999: "9999",
      },

      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },

      fontSize: {
        'hero': ['8rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'hero-md': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'hero-sm': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },

      backdropBlur: {
        xs: '2px',
      },

      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        counter: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      transitionDuration: {
        '400': '400ms',
      },

      borderRadius: {
        '4xl': '2rem',
      },

      boxShadow: {
        'glass': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        'glass-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.3)',
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
