/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        teally: '#48BCA0',
        dominant: '#197948',
        mrgray: '#efefef',
        'sale-red': '#e53e3e',
        'moss-green': '#007240',
        'medium-gray': '#444444',
        'dark-gray': '#222222',
        'lightest-green': '#efffff',
        'card-body': '#f19b0b',
        sun: '#f5c02c',
        'mustache-brown': '#a64b30',
        'scarf-red': '#ee4424',
        'light-blue': '#81bdfd',
        'dark-blue': '#0055c7'
      },
      spacing: {
        'x-tiny': '0.1rem',
        tiny: '0.15rem',
        '72': '18rem',
        '80': '20rem',
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
        '180': '45rem',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%'
      },
      borderColor: {
        teally: '#48BCA0',
        dominant: '#197948',
        mrgray: '#e8e8e8',
        'sale-red': '#e53e3e',
        'moss-green': '#007240'
      },
      height: {
        half: '50vh'
      }
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    width: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: []
}
