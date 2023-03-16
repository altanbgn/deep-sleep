module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					light: '#FFFC79',
					DEFAULT: '#FFC947',
					dark: '#C89907'
				},
				secondary: {
					light: '#6786FF',
					DEFAULT: '#185ADB',
					dark: '#0032a8'
				},
				tertiary: {
					light: '#343f5b',
					DEFAULT: '#0A1931',
					dark: '#00000a'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	important: true,
	plugins: []
}
