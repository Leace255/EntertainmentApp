/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "hsl(229,84%,5%)",
                secondary: "hsl(222,47%,11%)",
                icon: "hsl(215,19%,35%)",
                accent: "hsl(0,74%,42%)",
            },
            gridTemplateColumns: {
                fluid: "repeat(auto-fit, minmax(20rem, 1fr)"
            }
        },
    },
    plugins: [],
}