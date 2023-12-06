const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        textLarge: {
          '0%': { backgroundPosition: '0' },
          '60%': { backgroundPosition: '600px' },
          '100%': { backgroundPosition: '600px' }
        },
        textSmall: {
          '0%': { backgroundPosition: '0' },
          '60%': { backgroundPosition: '150px' },
          '100%': { backgroundPosition: '150px' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
        textLarge: 'textLarge 3s infinite linear',
        textSmall: 'textSmall 3s infinite linear'
      },
      dropShadow: {
        glow: ['0 0px 20px rgba(255,255, 255, 0.35)', '0 0px 65px rgba(255, 255,255, 0.2)']
      },
      colors: {
        customViolet: '#1b193f',
        ghostWhite: '#f9fcff',
        highlighter: '#e9ff32'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};
