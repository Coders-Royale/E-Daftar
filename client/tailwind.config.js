module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          25: "#E9F0FF",
          50: "#E3F4FC",
          150: "#12E2EF",
          250: "#13AAFF",
          350: "#1E90FF",
          450: "#2268FE",
        },
        gray: {
          150: "#FCFCFC",
          250: "#F8FAFB",
          350: "#F2F3F5",
          450: "#ACBBC2",
          550: "#94A6B0",
          650: "#45758F",
          750: "#2D5063",
          850: "#202020",
        },
        green: {
          150: "FFE4EA",
          550: "#039487",
        },
        red: {
          150: "#E9FFFD",
          550: "#DC143C",
        },
      },
    },
  },
  plugins: [],
}