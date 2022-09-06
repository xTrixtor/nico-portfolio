/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            tablet: "991px",
        },
        extend: {
            backgroundImage: {
                'vacation': "linear-gradient(to top,rgba(0, 0, 0, 0.8) 0%,rgba(64, 64, 64, 0.2) 100%)," +
                    "url(\"/images/projects/vacation.jpg\");",
                'block': "linear-gradient(to top,rgba(0, 0, 0, 0.8) 0%,rgba(64, 64, 64, 0.4) 100%)," +
                    "url(\"/images/projects/block.jpg\");",
                'statistic': "linear-gradient(to top,rgba(0, 0, 0, 0.8) 0%,rgba(64, 64, 64, 0.2) 100%)," +
                    "url(\"/images/projects/statistic.jpg\");",
                'portfolio': "linear-gradient(to top,rgba(0, 0, 0, 0.8) 0%,rgba(64, 64, 64, 0.2) 100%)," +
                    "url(\"/images/projects/portfolio.jpg\");"
            },
            colors: {
                brand: "#70C2E7",
            },
        },
    },
    plugins: [require("daisyui")],
};
