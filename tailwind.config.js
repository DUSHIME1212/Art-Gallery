/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "rgba(255, 255, 255, 0.5)",
          "200": "rgba(255, 255, 255, 0.21)",
          "300": "rgba(0, 0, 0, 0.6)",
        },
        darkslategray: {
          "100": "#333",
          "200": "rgba(51, 51, 51, 0.6)",
          "300": "rgba(51, 51, 51, 0.09)",
        },
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.09)",
          "300": "rgba(230, 230, 230, 0.21)",
        },
      },
      spacing: {},
      fontFamily: {
        "gilda-display": "'Gilda Display'",
        "dm-serif-display": "'DM Serif Display'",
        inherit: "inherit",
        manrope: "Manrope",
        inter: "Inter",
        gianna: "Gianna",
      },
      borderRadius: {
        "31xl": "50px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      "mini-8": "14.8px",
      sm: "14px",
      xl: "20px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "xs-9": "11.9px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      mini: "15px",
      lg: "18px",
      "8xl-1": "27.1px",
      "3xl": "22px",
      "mini-9": "14.9px",
      "mid-9": "17.9px",
      "7xl-9": "26.9px",
      "7xl-8": "26.8px",
      "2xl": "21px",
      "17xl": "36px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
