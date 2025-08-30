/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // CyberCore Palette - Premium Cybersecurity Theme
        primary: {
          900: "#0B0F2B", // Deep Navy - Primary BG
          800: "#1B1F30", // Soft Black - Shadows/Depth
          700: "#2A2E45", // Gunmetal - Card BG
          600: "#3A3F5C",
          500: "#4A5073",
          400: "#5A618A",
        },
        accent: {
          500: "#00FFF7", // Aqua Neon - Accent Highlight
          400: "#33FFF9",
          300: "#66FFFB",
          200: "#99FFFD",
          100: "#CCFFFE",
        },
        cta: {
          500: "#FF3B3B", // Electric Red - CTA Buttons
          400: "#FF5555",
          300: "#FF7070",
          200: "#FF8A8A",
          100: "#FFA5A5",
        },
        success: {
          500: "#00FFAB", // Lime Green - Success UI
          400: "#33FFB8",
          300: "#66FFC5",
          200: "#99FFD2",
          100: "#CCFFE9",
        },
        text: {
          primary: "#F8FAFC", // White - Text Main
          secondary: "#CBD5E1",
          muted: "#94A3B8",
          dark: "#475569",
        },
        cyber: {
          navy: "#0B0F2B",
          gunmetal: "#2A2E45",
          aqua: "#00FFF7",
          red: "#FF3B3B",
          lime: "#00FFAB",
          shadow: "#1B1F30",
        },
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #0B0F2B 0%, #1B1F30 50%, #2A2E45 100%)",
        "gradient-accent":
          "linear-gradient(135deg, #00FFF7 0%, #33FFF9 50%, #66FFFB 100%)",
        "gradient-cta":
          "linear-gradient(135deg, #FF3B3B 0%, #FF5555 50%, #FF7070 100%)",
        "gradient-success":
          "linear-gradient(135deg, #00FFAB 0%, #33FFB8 50%, #66FFC5 100%)",
        "gradient-glass":
          "linear-gradient(135deg, rgba(0,255,247,0.1) 0%, rgba(0,255,247,0.05) 100%)",
        "gradient-cyber":
          "linear-gradient(135deg, #0B0F2B 0%, #1B1F30 25%, #2A2E45 50%, #00FFF7 100%)",
        "gradient-hero":
          "linear-gradient(180deg, #0B0F2B 0%, #1B1F30 50%, #0B0F2B 100%)",
      },
      fontSize: {
        hero: ["4rem", { lineHeight: "1.1" }],
        h1: ["3rem", { lineHeight: "1.2" }],
        h2: ["2.25rem", { lineHeight: "1.3" }],
        h3: ["1.875rem", { lineHeight: "1.4" }],
        body: ["1.125rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "glow-aqua": "glow-aqua 2s ease-in-out infinite alternate",
        "glow-red": "glow-red 2s ease-in-out infinite alternate",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
        "spin-slow": "spin 8s linear infinite",
        "cyber-pulse": "cyber-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(0, 255, 247, 0.5)" },
          "100%": {
            boxShadow:
              "0 0 20px rgba(0, 255, 247, 0.8), 0 0 30px rgba(0, 255, 247, 0.6)",
          },
        },
        "glow-aqua": {
          "0%": {
            boxShadow:
              "0 0 10px rgba(0, 255, 247, 0.4), 0 0 20px rgba(0, 255, 247, 0.2)",
          },
          "100%": {
            boxShadow:
              "0 0 20px rgba(0, 255, 247, 0.8), 0 0 40px rgba(0, 255, 247, 0.6), 0 0 60px rgba(0, 255, 247, 0.4)",
          },
        },
        "glow-red": {
          "0%": {
            boxShadow:
              "0 0 10px rgba(255, 59, 59, 0.4), 0 0 20px rgba(255, 59, 59, 0.2)",
          },
          "100%": {
            boxShadow:
              "0 0 20px rgba(255, 59, 59, 0.8), 0 0 40px rgba(255, 59, 59, 0.6), 0 0 60px rgba(255, 59, 59, 0.4)",
          },
        },
        "cyber-pulse": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: 1,
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: 0.8,
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 255, 247, 0.3)",
        "glow-lg": "0 0 40px rgba(0, 255, 247, 0.4)",
        "glow-xl": "0 0 60px rgba(0, 255, 247, 0.5)",
        "glow-red": "0 0 20px rgba(255, 59, 59, 0.3)",
        "glow-red-lg": "0 0 40px rgba(255, 59, 59, 0.4)",
        "glow-success": "0 0 20px rgba(0, 255, 171, 0.3)",
        "inner-glow": "inset 0 0 20px rgba(0, 255, 247, 0.2)",
        cyber:
          "0 8px 32px rgba(11, 15, 43, 0.3), 0 4px 16px rgba(0, 255, 247, 0.1)",
        "cyber-lg":
          "0 16px 64px rgba(11, 15, 43, 0.4), 0 8px 32px rgba(0, 255, 247, 0.15)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".glass-card": {
          background:
            "linear-gradient(135deg, rgba(0,255,247,0.1) 0%, rgba(0,255,247,0.05) 100%)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(0,255,247,0.2)",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(11, 15, 43, 0.3)",
        },
        ".glass-card-dark": {
          background:
            "linear-gradient(135deg, rgba(42,46,69,0.8) 0%, rgba(27,31,48,0.6) 100%)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0,255,247,0.15)",
          borderRadius: "20px",
          boxShadow: "0 12px 48px rgba(11, 15, 43, 0.4)",
        },
        ".cyber-border": {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            padding: "2px",
            background: "linear-gradient(45deg, #00FFF7, #33FFF9, #66FFFB)",
            borderRadius: "inherit",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
          },
        },
        ".cyber-border-red": {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            padding: "2px",
            background: "linear-gradient(45deg, #FF3B3B, #FF5555, #FF7070)",
            borderRadius: "inherit",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
          },
        },
        ".text-cyber-glow": {
          textShadow:
            "0 0 10px rgba(0, 255, 247, 0.8), 0 0 20px rgba(0, 255, 247, 0.6), 0 0 30px rgba(0, 255, 247, 0.4)",
        },
        ".text-glow-red": {
          textShadow:
            "0 0 10px rgba(255, 59, 59, 0.8), 0 0 20px rgba(255, 59, 59, 0.6), 0 0 30px rgba(255, 59, 59, 0.4)",
        },
        ".text-glow-success": {
          textShadow:
            "0 0 10px rgba(0, 255, 171, 0.8), 0 0 20px rgba(0, 255, 171, 0.6), 0 0 30px rgba(0, 255, 171, 0.4)",
        },
        ".cyber-gradient-text": {
          background:
            "linear-gradient(135deg, #00FFF7 0%, #33FFF9 50%, #66FFFB 100%)",
          backgroundClip: "text",
          color: "transparent",
        },
        ".cyber-card": {
          background:
            "linear-gradient(135deg, rgba(42,46,69,0.9) 0%, rgba(27,31,48,0.8) 100%)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0,255,247,0.2)",
          borderRadius: "20px",
          boxShadow:
            "0 12px 48px rgba(11, 15, 43, 0.4), inset 0 1px 0 rgba(0,255,247,0.1)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
