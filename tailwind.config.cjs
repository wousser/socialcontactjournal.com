/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', 'privacy-policy.html', 'terms.html'],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        '"Inter", sans-serif', {
          fontFeatureSettings: '"liga" 1, "calt" 1',
          fontVariationSettings: 'normal'
        },
      ],
    },
  },
  plugins: [],
}
