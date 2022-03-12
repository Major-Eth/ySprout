const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	corePlugins: {
		ringColor: false,
	},
	content: [
		'./pages/**/*.js',
		'./components/**/*.js'
	],
	theme: {
		colors: {
			'black': '#000000',
			'grey-1': '#272727',
			'grey-2': '#797979',
			'grey-3': '#C4C4C4',
			'grey-4': '#F2F2F2',
			'green-1': '#536121',
			'green-2': '#748A29',
			'green-3': '#DFE2D4',
			'white': '#FFFFFF',
			'background': '#F2F2F2'
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto Mono', ...defaultTheme.fontFamily.sans]
			},
			screens: {
				'small': {'raw': '(max-height: 999px) and (min-width: 768px)'},
				'tall': {'raw': '(min-height: 1000px) and (min-width: 768px)'},
			},
			width: {
				30: '7.5rem',
				33: '8.25rem',
				38: '9.5rem',
				42: '10.5rem',
				50: '12.5rem',
				55: '13.75rem',
			},
			height: {
				30: '7.5rem',
			},
			spacing: {
				30: '7.5rem',
			},
			maxWidth: {
				'xl': '552px',
				'4xl': '904px',
				'6xl': '1200px',
			},
			fontSize: {
				'xs': ['12px', '16px'],
				'sm': ['14px', '20px'],
				'base': ['16px', '24px'],
				'lg': ['20px', '32px'],
				'xl': ['24px', '32px'],
				'4xl': ['40px', '56px'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	],
};