/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          softred: "hsl(10, 79%, 65%)",
          softred70: "hsla(10, 79%, 65%, 70%)",
          cyan: "hsl(186, 34%, 60%)",
          cyan70: "hsla(186, 34%, 60%, 70%)",
        },
        neutral: {
          darkbrown: "hsl(25, 47%, 15%)",
          mediumbrown: "hsl(28, 10%, 53%)",
          mediumbrown50: "hsla(28, 10%, 53%. 50%)",
          cream: "hsl(27, 66%, 92%)",
          paleorange: "hsl(33, 100%, 98%)",
        },
      },
    },
    fontFamily: {
      sans: "DM Sans",
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
  },
  plugins: [],
};
