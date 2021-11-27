module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                '192': '48rem'
            },
            colors: {
                'unauthorized-bg-color': '#A9D4EF',
                'carolina-blue': '#41A1DC',
                'prussian-blue': '#0D2F45'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}