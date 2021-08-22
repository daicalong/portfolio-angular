
const colors = {
    transparent: 'transparent',


    black: {
        DEFAULT: '#000',
    },

    white: {
        DEFAULT: '#fff',
    },

    'gray': {
        '50': '#f7f7f8',
        '100': '#efeff0',
        '200': '#d6d6da',
        '300': '#bebec3',
        '400': '#8d8d96',
        '500': '#5c5c69',
        '600': '#53535f',
        '700': '#45454f',
        '800': '#37373f',
        '900': '#2d2d33'
    },
    'primary-yellow': {
        '50': '#fefdf5',
        '100': '#fcfcec',
        '200': '#f8f7cf',
        '300': '#f4f3b1',
        '400': '#ebe977',
        '500': '#e3e03d',
        '600': '#ccca37',
        '700': '#aaa82e',
        '800': '#888625',
        '900': '#6f6e1e'
    },
    'primary-blue': {
        '50': '#f4f7ff',
        '100': '#e9effe',
        '200': '#c7d7fd',
        '300': '#a6bffb',
        '400': '#6390f8',
        '500': '#2060f5',
        '600': '#1d56dd',
        '700': '#1848b8',
        '800': '#133a93',
        '900': '#102f78'
    },
    'primary-pink': {
        '50': '#fff5f8',
        '100': '#feebf1',
        '200': '#fdcedc',
        '300': '#fcb1c7',
        '400': '#f9769e',
        '500': '#f73b74',
        '600': '#de3568',
        '700': '#b92c57',
        '800': '#942346',
        '900': '#791d39'
    }
};

const spacing = {
    '0': '0rem',
    '1/10': '10%',
    '3/20': '15%',
    '1/4': '25%',
    '1/3': '33.333%',
    '1/2': '50%',
    '2/3': '66.666%',
    '3/4': '75%',
    '9/10': '90%',
    'px': '1px',
    '2': '2px',
    '4': '4px',
    '5': '0.5rem',
    '8': '0.8rem',
    '10': '1rem',
    '15': '1.5rem',
    '18': '1.8rem',
    '20': '2rem',
    '24': '2.4rem',
    '25': '2.5rem',
    '28': '2.8rem',
    '30': '3rem',
    '32': '3.2rem',
    '34': '3.4rem',
    '36': '3.6rem',
    '40': '4rem',
    '42': '4.2rem',
    '48': '4.8rem',
    '50': '5rem',
    '58': '5.8rem',
    '60': '6rem',
    '64': '6.4rem',
    '72': '7.2rem',
    '80': '8rem',
    '96': '9.6rem',
    '100': '10rem',
    '120': '12rem',
    '128': '12.8rem',
    '150': '15rem',
    '192': '19.2rem',
    '200': '20rem',
    '240': '24rem',
    '256': '25.6rem',
    '300': '30rem',
    '320': '32rem',
    '360': '36rem',
    '384': '38.4rem',
    '400': '40rem',
    '460': '46rem',
    '480': '48rem',
    '500': '50rem',
    '512': '51.2rem',
    '640': '64rem',
    '720': '72rem',
    '840': '84rem',
    '960': '96rem',
    '1280': '128rem',
    '1440': '144rem',
    '1920': '192rem',
    '90vh': '90vh',
    '100vh': '100vh',
};

const fontSize = {
    'xs': '0.8rem',
    'sm': '1.2rem',
    'base': '1.6rem',
    'lg': '1.8rem',
    'xl': '2rem',
    '2xl': '2.4rem',
    '3xl': '3.6rem',
    '4xl': '4.8rem',
    'normalize': '62.5%',
}

module.exports = {
    prefix: '',
    purge: {
        enabled: true,
        content: [
            './src/**/*.{html,ts}',
        ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            maxWidth: spacing,
            minWidth: spacing,
            maxHeight: spacing,
            minHeight: spacing,
            brightness: {
                '500': '5',
            }
        },
        screens: {
            'xs': '360px',
            'sm': '960px',
            'md': '1280px',
            'lg': '1440px',
            'xl': '1920px'
        },
        spacing: spacing,
        colors: colors,
        borderRadius: {
            'none': '0px',
            'sm': '2px',
            DEFAULT: '4px',
            'lg': '8px',
            'xl': '16px',
            full: '9999px',
        },
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0px 3px 5px -1px rgb(0 0 0 / 10%), 0px 6px 10px 0px rgb(0 0 0 / 6%), 0px 1px 18px 0px rgb(0 0 0 / 4%)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
        },
        fontFamily: {
            display: ['Rawline', 'sans-serif'],
            body: ['Rawline', 'sans-serif'],
        },
        fontSize: fontSize,
    },
    variants: {
        extend: {
            borderWidth: ['dark'],
            borderStyle: ['dark'],
            boxShadow: ['dark'],
            filter: ['dark'],
            brightness: ['dark'],
            grayscale: ['dark'],
            transform: ['group-hover'],
            scale: ['group-hover']
        },
    },
};
