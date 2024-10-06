/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
			colors: {
				mainBg: '#e7e7e7',
				textDark: '#1f1513',
			},
			minWidth: {
        '380': '380px',
				'200': '200px'
      },
			maxHeight: {
        '48': '48px',
				'56': '56px'
      },
			fontSize: {
				base: '17px'
			},
			padding: {
				'30': '30px'
			},
			boxShadow: {
        'myInner': 'inset 0px 0px 4px 1.5px rgba(160, 124, 186, 0.5)',
      }
		},
  },
  plugins: [],
}