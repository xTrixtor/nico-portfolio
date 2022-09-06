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
            colors: {
                brand: "#70C2E7",
            },
        },
    },
    plugins: [require("daisyui")],
};
