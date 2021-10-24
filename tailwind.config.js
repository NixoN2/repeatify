module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'unauthorized-bg-color': '#A9D4EF'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}