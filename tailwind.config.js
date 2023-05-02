// /** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            ...fontFamily,
            heading: ["Josefin Sans", "sans-serif"],
            block: ["Fira Mono", "monospace"],
        },
        colors: {
            blackText: {
                DEFAULT: "#231F26",
                50: "#757579",
                100: "#6B6B6F",
                200: "#57575A",
                300: "#434346",
                400: "#2F2F31",
                500: "#1B1B1C",
                600: "#000000",
                700: "#000000",
                800: "#000000",
                900: "#000000",
            },
            darkGrey: "#494949",
            primaryColor: {
                DEFAULT: "#FC7327",
                50: "#FFE8DC",
                100: "#FEDBC8",
                200: "#FEC1A0",
                300: "#FDA777",
                400: "#FD8D4F",
                500: "#FC7327",
                600: "#E85503",
                700: "#B04002",
                800: "#792C02",
                900: "#421801",
            },
            darkBG: "#02040F",
            lightGrey: "#F7F7F7",
            lightPrimary: "#E6E4DD",
            greenColor: "#6DC593",
            redColor: "#FB5012",
        },
        height: {
            "calc-70px": "calc(100% - 70px)",
        },
    },
    plugins: [],
};
