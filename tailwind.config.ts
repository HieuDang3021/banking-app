import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "bank-gradient": "linear-gradient(90deg, #0179FE 0%, #4893FF 100%)",
        "gradient-mesh": "url('/icons/gradient-mesh.svg')",
        "bank-green-gradient":
          "linear-gradient(90deg, #01797A 0%, #489399 100%)",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        '.no-scrollbar': {
          /* Hide scrollbar but allow scrolling */
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none', /* Chrome, Safari, Opera */
          },
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          background: '#dddddd',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          background: '#5c5c7b',
          'border-radius': '50px',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb:hover': {
          background: '#7878a3',
        },
        '.custom-scrollbar::-webkit-scrollbar': {
          width: '3px',
          height: '3px',
          'border-radius': '2px',
        },
      });
    }
  ],
} satisfies Config;

export default config;
