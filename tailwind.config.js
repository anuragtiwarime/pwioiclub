/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        fadedDarkBlue: '#3b4d61', // Replace with your exact shade for faded dark blue
        blue: '#1e3a8a',          // Replace with your exact shade for blue
        // No need to add white as it's already a default color in Tailwind
      },
    },
  },
  plugins: [], // Ensure plugins array is within the module.exports object
};
