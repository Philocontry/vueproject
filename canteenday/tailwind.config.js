/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          neonBlue: "#00f7ff",
          neonPink: "#ff00ff",
          darkBg: "#0a0a0a",
        },
        animation: {
          glow: "glow 2s infinite alternate",
          float: "float 3s ease-in-out infinite",
        },
        keyframes: {
          glow: {
            "0%": { textShadow: "0 0 5px #fff, 0 0 10px #0ff, 0 0 15px #0ff" },
            "100%": { textShadow: "0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff" },
          },
          float: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-10px)" },
          },
        },
      },
    },
    plugins: [],
  };
  