/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'main-color':'#234E70',
        'secondary-color':'#FBF8BE',
      },
      height: {
        '500': '500px',
      },
      width: {
        '215': '215px',
      },
      spacing: {
        '435': '435px',
        '478':'478px',
        '415':'415px',
      },
      fontSize: {
        f20: ['20px', '10px'],
      },
      fontFamily: {
        vazir: ['vazir','sans-serif'],
        vazirBlack: ['vazirBlack','sans-serif'],
        vazirBold: ['vazirBold','sans-serif'],
      },
    },
  },
  plugins: [],
}

