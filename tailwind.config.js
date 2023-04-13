module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: '320px',
      tablet: '768px',
      desktop: '960px',
      wide: '1500px',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
  important: true,
}
