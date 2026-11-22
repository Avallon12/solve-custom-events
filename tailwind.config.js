/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sol Vé brand system — Creative Direction Manual, Chapter 1
        ivory: '#F8F7F6',
        gold: '#9E8D6F',
        stone: '#ABA297',
        charcoal: '#242216',
        bronze: '#8B765C',
        champagne: '#C7B6A6',
        linen: '#D0C8B1',
        cocoa: '#6C6251',
        espresso: '#5C4E32',
        walnut: '#4B3724',
        // Mystic Moonlight Masquerade — campaign section only
        mmm: {
          burgundy: '#5B1020',
          gold: '#C9A84C',
          champagne: '#E4D18A',
          ivory: '#F8F5EF',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        ui: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.3em',
        wide: '0.18em',
      },
      maxWidth: {
        content: '1240px',
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Slow cinematic drift on hero media — luxury, never busy
        drift: {
          '0%': { transform: 'scale(1.06) translate3d(0, 0, 0)' },
          '100%': { transform: 'scale(1.14) translate3d(-1.5%, -1.5%, 0)' },
        },
        sheen: {
          '0%': { backgroundPosition: '-120% 0' },
          '100%': { backgroundPosition: '220% 0' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.2s ease-out',
        rise: 'rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        drift: 'drift 26s ease-in-out infinite alternate',
        sheen: 'sheen 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
