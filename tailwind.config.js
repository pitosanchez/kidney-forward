/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '475px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
                '3xl': '1920px',
            },
            colors: {
                // Primary blue from the palette
                primary: {
                    50: '#eef5ff',
                    100: '#d9e7ff',
                    200: '#bcd5ff',
                    300: '#8ebcff',
                    400: '#5999ff',
                    500: '#2480dd', // Main blue color
                    600: '#1f6fc8',
                    700: '#1a5ba5',
                    800: '#1a4c86',
                    900: '#1b416e',
                    950: '#13294a',
                },
                // Purple from the palette
                secondary: {
                    50: '#f6f4fb',
                    100: '#ebe7f6',
                    200: '#d5cbec',
                    300: '#b3a1db',
                    400: '#8a71c6',
                    500: '#604f9e', // Main purple color
                    600: '#5544a0',
                    700: '#483a85',
                    800: '#3e326e',
                    900: '#352b5b',
                    950: '#241d3f',
                },
                // Green accent from the palette
                accent: {
                    50: '#f1fcef',
                    100: '#e1f9db',
                    200: '#c5f2bb',
                    300: '#99e789',
                    400: '#67bc4b', // Main green color
                    500: '#4aa830',
                    600: '#378c23',
                    700: '#2c6d1e',
                    800: '#26571c',
                    900: '#21491a',
                    950: '#0e270a',
                },
                // Dark gray from the palette
                slate: {
                    50: '#f8f9fa',
                    100: '#f1f3f4',
                    200: '#e6e9ed',
                    300: '#d2d8df',
                    400: '#b0bac8',
                    500: '#8b98ac',
                    600: '#6b7b92',
                    700: '#566278',
                    800: '#49556a', // Main dark gray color
                    900: '#3f4758',
                    950: '#282d3a',
                },
                // Light gray from the palette
                gray: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#ebebeb',
                    300: '#d1d1d1', // Main light gray color
                    400: '#a3a3a3',
                    500: '#787878',
                    600: '#525252',
                    700: '#404040',
                    800: '#2a2a2a',
                    900: '#1a1a1a',
                    950: '#0d0d0d',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Urbanist', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
                '7xl': ['4.5rem', { lineHeight: '1' }],
                '8xl': ['6rem', { lineHeight: '1' }],
                '9xl': ['8rem', { lineHeight: '1' }],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            animation: {
                'fade-in': 'fade-in 0.6s ease-out',
                'slide-up': 'slide-up 0.8s ease-out',
                'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-up': {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'bounce-gentle': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05)',
                '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
            },
            backdropBlur: {
                xs: '2px',
            },
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
            },
            aspectRatio: {
                'auto': 'auto',
                'square': '1 / 1',
                'video': '16 / 9',
                'portrait': '3 / 4',
                'landscape': '4 / 3',
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
} 