import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      textShadow: {
        DEFAULT: "2px 2px 4px rgba(255, 255, 255, 0.5)",
        lg: "4px 4px 6px rgba(255, 255, 255, 0.5)",
        xl: "8px 8px 6px rgba(255, 255, 255, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontSize: {
        "display-1": ["68px", "81px"],
        "display-2": ["46px", "55px"],
        "heading-1": ["42px", "59px"],
        "heading-2": ["32px", "48px"],
        "heading-3": ["20px", "30px"],
        "heading-4": ["18px", "30px"],
        "heading-5": ["16px", "24px"],
        "heading-6": ["14px", "21px"],
        "body-xl": ["18px", "25px"],
        "body-lg": ["16px", "24px"],
        "body-md": ["14px", "21px"],
        "body-sm": ["12px", "18px"],
        "body-xs": ["10px", "15px"],
      },
      fontFamily: {
        arial: ["Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: "rgba(249, 235, 236, 1)",
          100: "rgba(236, 192, 196, 1)",
          200: "rgba(227, 162, 168, 1)",
          300: "rgba(215, 119, 128, 1)",
          400: "rgba(207, 93, 104, 1)",
          500: "hsl(var(--primary))",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        success: {
          200: "rgba(74, 222, 128, 1)",
          500: "rgba(34, 197, 94, 1)",
          700: "rgba(22, 163, 74, 1)",
          DEFAULT: "rgba(34, 197, 94, 1)",
        },
        warning: {
          200: "rgba(255, 113, 113, 1)",
          500: "rgba(250, 204, 21, 1)",
          700: "rgba(234, 179, 8, 1)",
          DEFAULT: "rgba(250, 204, 21, 1)",
        },
        error: {
          200: "rgba(255, 113, 113, 1)",
          500: "rgba(255, 71, 71, 1)",
          700: "rgba(221, 51, 51, 1)",
          DEFAULT: "rgba(255, 71, 71, 1)",
        },
        gray: {
          50: "rgba(249, 251, 253, 1)",
          100: "rgba(242, 244, 246, 1)",
          200: "rgba(229, 231, 235, 1)",
          300: "rgba(209, 213, 219, 1)",
          400: "rgba(156, 163, 175, 1)",
          500: "rgba(107, 114, 128, 1)",
          600: "rgba(75, 85, 99, 1)",
          700: "rgba(55, 65, 81, 1)",
          800: "rgba(31, 41, 55, 1)",
          900: "rgba(17, 24, 39, 1)",
          DEFAULT: "rgba(107, 114, 128, 1)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "rgba(219, 229, 245, 1)",
        },
        "tertiary-secondary": {
          DEFAULT: "rgba(52, 178, 241, 1)",
        },
        "tertiary-card": {
          DEFAULT: "rgba(221, 227, 238, 1)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",

        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        tertiary: "0 1px 3px rgba(0, 0, 0, 0.5)",
        "tertiary-md": "0 1.15px 3.2px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInBottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInTop: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slideBackground: {
          "0%": { backgroundImage: "url(/bg1.jpg)" },
          "25%": { backgroundImage: "url(/bg2.jpg)" },
          "50%": { backgroundImage: "url(/bg3.jpg)" },
          "75%": { backgroundImage: "url(/bg2.jpg)" },
          "100%": { backgroundImage: "url(/bg1.jpg)" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 1s ease-out forwards",
        slideInRight: "slideInRight 1s ease-out forwards",
        slideInBottom: "slideInBottom 1s ease-out forwards",
        slideInTop: "slideInTop 1s ease-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideBackground: "slideBackground 90s infinite",
      },
      addUtilities: {
        ".will-change-bg": {
          willChange: "background-image",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".text-shadow": {
          "text-shadow": "2px 2px 4px rgba(255, 255, 255, 0.5)",
        },
        ".text-shadow-lg": {
          "text-shadow": "4px 4px 6px rgba(255, 255, 255, 0.5)",
        },
        ".text-shadow-xl": {
          "text-shadow": "5px 5px 4px rgba(255, 255, 255, 0.5)",
        },
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    },
    require("tailwindcss-animate"),
  ],
} satisfies Config

export default config
