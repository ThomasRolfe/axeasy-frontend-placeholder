module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "brand-black-light": "#1f2937",
                "brand-black-dark": "#111827",
                "brand-orange": "#ff9200",
                "brand-bright-blue": "#23eaf2",
                "brand-light-turq": "#16d4c7",
                "brand-dark-turq": "#17a299",
                "twitter-blue": "#1d9bf0",
            },
            maxWidth: {
                "8xl": "1500px",
            },
        },

        fontFamily: {
            "filson-soft": ["Filson soft", "sans-serif"],
            "filson-pro": ["Filson pro", "sans-serif"],
            muli: ["Muli", "sans-serif"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
