/** @type {import('tailwindcss').Config} */

export const darkMode = "class";
export const content = [
  './pages/**/*.{js,jsx}',
  './components/**/*.{js,jsx}',
  './app/**/*.{js,jsx}',
  './src/**/*.{js,jsx}',
];
export const theme = {
  extend: {
    colors: {
      primary: {
        DEFAULT: "#E97400",
      },
      secondary: {
        DEFAULT: "#FFFFFF",
      },
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-gradient': 'linear-gradient(0deg, #FFF 0%, #E97400 51%, #FFF 100%)',
    },
    spacing: {
      '9': '2.25rem', // 9% pour les petites marges
      '32': '8rem', // 32% pour les grandes marges
    },
    typography: {
      h1: {
        fontSize: '3xl', // Taille pour les titres
        fontWeight: 'bold',
        '@screen sm': {
          fontSize: '4xl', // Taille pour les titres sur les écrans de taille sm et supérieure
        },
        textAlign: 'center', // Alignement horizontal du texte au centre
      },
      h3: {
        fontSize: '1.5rem', // Taille pour les sous-titres
        fontWeight: 'bold',
        marginBottom: 'var(--spacing-9)', // Utilisation de la petite marge
        color: 'var(--color-primary)', // Couleur primaire pour les sous-titres
      },
      p: {
        fontSize: '1rem', // Taille pour les paragraphes
        marginBottom: 'var(--spacing-9)', // Utilisation de la petite marge
        color: 'var(--color-secondary)', // Couleur secondaire pour les paragraphes
      },
    },
    // Ajout des animations personnalisées
    keyframes: {
      scrollX: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      loading: {
        '0%': { left: '0%' },
        '100%': { left: '100%' },
      },
    },
    animation: {
      scrollX: 'scrollX 20s linear infinite',
      loading: 'loading 2s infinite linear',
    },
  },
};
export const plugins = [
  require('@tailwindcss/typography'),
  require('tailwindcss-animate'),
];
