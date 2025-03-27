import type { Config } from "tailwindcss";

const colors = {
  primaryDark: '#2b2277',
  primaryDefault: '#6c61d1',
  primaryLight: '#9188dd',
  primaryLighter: '#b6b0e8',
  primaryLightest: '#dbd8f3',
  hoverNewTheme: '#9188dd',
  secondaryDark: '#e3ab03',
  secondaryDefault: '#fcc41b',
  secondaryLight: '#fdd14f',
  secondaryLighter: '#fee7a4',
  secondaryLightest: '#fff4d7',
  redDark: '#d10600',
  redDefault: '#ff0e07',
  redLight: '#ff3e38',
  redLighter: '#ff6f6b',
  redLightest: '#ffd2d1',
  blueDark: '#0071cc',
  blueDefault: '#008dff',
  blueLight: '#33a4ff',
  blueLighter: '#66bbff',
  blueLightest: '#cce8ff',
  greenDark: '#008a0a',
  greenDefault: '#00bd0e',
  greenLight: '#00f012',
  greenLighter: '#24ff34',
  greenLightest: '#bdffc2',
  yellowDark: '#c29900',
  yellowDefault: '#f4c100',
  yellowLight: '#ffd229',
  yellowLighter: '#ffdd5c',
  yellowLightest: '#fff2c2',
  inkDark: '#050505',
  inkDefault: '#1e1e1e',
  inkLight: '#383838',
  inkLighter: '#525252',
  inkLightest: '#6b6b6b',
  secondaryBackgroundButton: '#ffffff',
  secondaryTextButton: '#050505',
  skyDark: '#a8a8a8',
  skyDefault: '#c2c2c2',
  skyLight: '#dbdbdb',
  skyLighter: '#f6f6f6',
  skyLightest: '#ffffff',
  lightest: '#262424',
  error: '#ff0e07',
  success: '#00bd0e',
};

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      backgroundImage: {
        shape: 'linear-gradient(180deg, #7a7676 0%, #1a1a1a 77.66%)',
        jackpot:
          'linear-gradient(180deg, #d9ad57 12.5%, #f1e69f 31.46%, #faef9f 47.86%, #dcaa52 65%)',
        borderJackpot:
          'linear-gradient(180deg, #d9ad57 12.5%, #f1e69f 22.62%, #fff 34.1%, #faef9f 53.52%, #dcaa52 65%)',
      },
      boxShadow: {
        'custom': '0px 2px 10px rgba(0, 0, 0, 0.3)'
      },
      keyframes: {
        'topbar-icon-bounce': {
          '0%, 100%, 20%, 40%, 60%, 80%': { transform: 'translateY(0)' },
          '70%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
        move: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "150px 150px" },
        },
      },
      animation: {
        'topbar-icon-bounce': 'topbar-icon-bounce 0.5s linear infinite both',
        marquee: "marquee 10s linear infinite",
        move: "move 5s linear infinite",
      },
      screens: {
        'xs': '370px', // Or your desired minimum width for 'xs'
      },
    },
  },
  plugins: [],
} satisfies Config;
