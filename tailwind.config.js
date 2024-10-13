/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--background)',
          secondary: 'var(--background-secondary)',
        },
        text: {
          DEFAULT: 'var(--text)',
          muted: 'var(--text-muted)',
          title: 'var(--text-title)',
        },
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
      fontSize: {
        'title-large': ['33.9px', { lineHeight: '50.85px', fontWeight: '700' }],
        'body-large': ['18.37px', { lineHeight: '27.56px', fontWeight: '500' }],
        'body-medium': ['16.3px', { lineHeight: '28.94px', fontWeight: '300' }],
        'body-small': ['11.82px', { lineHeight: '18.91px', fontWeight: '500', letterSpacing: '0.1477707028388977px' }],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
