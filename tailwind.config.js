module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          'green-lighter': 'hsl(148, 38%, 91%)',
          'green-medium': 'hsl(169, 82%, 27%)',
          'red': 'hsl(0, 66%, 54%)',
        },
        neutral: {
          'White': 'hsl(0, 0%, 100%)',
          'gray-medium': 'hsl(186, 15%, 59%)',
          'gray-darker': 'hsl(187, 24%, 22%)',
        }
      },
      fontFamily: {
        'Karla': ['Karla', 'sans-serif'],
      },
      fontSize: {
        'body': '16px',
      },
    },
  },
  plugins: [],
};
