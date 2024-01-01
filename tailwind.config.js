/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#055EA8',
        'orange': '#FF7F12',
        'white': '#FFF',
        'black': '#222',
        'light-grey': '#D2D2D2',
        'dark-blue': '#055EA8',
        'main-blue' : '#044E8C',
        'main-black' : '#45484F',
      },
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'footer-texture': '#FF5733',
        },
        fontFamily: {
          poppins: ["Poppins", "sans"],
          rubix: ["Rubik","sans-serif"]
        },
        boxShadow: {
          'card': '0px 2px 2px 0px rgba(0,0,0,0.3)'
        }
      },
      plugins: [require("tailwind-scrollbar-hide")],
    },
  },
};
