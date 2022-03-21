const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        /* https://tailwindshades.com used to generate shades */
        mineshaft: {
          DEFAULT: '#333333',
          50: '#8F8F8F',
          100: '#858585',
          200: '#707070',
          300: '#5C5C5C',
          400: '#474747',
          500: '#333333',
          600: '#171717',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        brightred: {
          DEFAULT: '#B1001C',
          50: '#FF6A81',
          100: '#FF5570',
          200: '#FF2C4E',
          300: '#FF042B',
          400: '#DA0022',
          500: '#B1001C',
          600: '#790013',
          700: '#41000A',
          800: '#090001',
          900: '#000000',
        },
      },
      height: {
         21: '5.25rem',
         25: '6.25rem',
         90: '22.5rem',
        100: '26rem',
        120: '30rem',
        144: '36rem',
      },
      fontFamily: {
        chantroman: ['Chanticleer Roman nf Regular'],
        calibri: ['Calibri'],
      },
      fontSize: {
        0: 0,
      },
      backgroundImage: {
        logo: "url('/images/logo.png')",
        guitar: "url('/images/guitar.png')",
        drumsticks: "url('/images/drumsticks.png')",
        'jumbotron-home': "url('/images/jumbotron-home.jpg')",
        'jumbotron-schools': "url('/images/jumbotron-schools.jpg')",
        'jumbotron-parents': "url('/images/jumbotron-parents.jpg')",
        'jumbotron-contact': "url('/images/jumbotron-contact.jpg')",
      },
      backgroundPosition: {
        'drumstickspos1': "40% bottom",
        'guitarpos1': "95% -70px",
        'guitarpos2': "85% -70px",
      },
      borderWidth: {
        8: '8rem',
        14: '14rem',
        15: '15rem',
        16: '16rem',
        24: '24rem',
        26: '26rem',
        28: '28rem',
        32: '32rem',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
};

module.exports = config;
