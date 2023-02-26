/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				30: 'repeat(30, minmax(0, 1fr))',
				120: 'repeat(120, minmax(0, 1fr))',
				180: 'repeat(180, minmax(0, 1fr))',
			},
		},
	},
	plugins: [],
}
