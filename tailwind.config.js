/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            tablet: "991px",
            lg: '1024px',
            xl: '1280px',
        },
        extend: {
            colors: {
                brand: "#70C2E7",
            },
        },
    },
    plugins: [require("daisyui")],
};
