/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Professional Cybersecurity Palette - Clean & Sophisticated
        primary: {
          900: "#09165C", // Deep Royal Blue - Primary BG
          800: "#0B1A68", // Enhanced Deep Blue
          700: "#0D1F75", // Medium Blue
          600: "#102582", // Rich Blue
          500: "#122A8F", // Vibrant Blue
          400: "#1530A0", // Light Blue
          300: "#3B52C4", // Lighter Blue
          200: "#6174E8", // Very Light Blue
          100: "#8B9BFF", // Pale Blue
        },
        accent: {
          500: "#FFFFFF", // Pure White - Primary Accent
          400: "#F8FAFC", // Off White
          300: "#E2E8F0", // Light Gray
          200: "#CBD5E1", // Medium Gray
          100: "#94A3B8", // Dark Gray
        },
        // Purple Gradient Variations (Professional)
        purple: {
          600: "#6B46C1", // Deep Professional Purple
          500: "#7C3AED", // Medium Purple
          400: "#8B5CF6", // Light Purple
          300: "#A78BFA", // Lighter Purple
          200: "#C4B5FD", // Very Light Purple
          100: "#DDD6FE", // Pale Purple
        },
        // CTA Colors (Blue-Purple Gradient)
        cta: {
          500: "#7C3AED", // Purple CTA - Primary Action
          400: "#8B5CF6", // Medium Purple
          300: "#A78BFA", // Light Purple
          200: "#C4B5FD", // Lighter Purple
          100: "#DDD6FE", // Very Light Purple
        },
        // Success/Status (Subtle Blue-Purple)
        success: {
          500: "#6366F1", // Indigo Success
          400: "#818CF8", // Light Indigo
          300: "#A5B4FC", // Lighter Indigo
          200: "#C7D2FE", // Very Light Indigo
          100: "#E0E7FF", // Pale Indigo
        },
        text: {
          primary: "#FFFFFF", // Pure White - Text Main
          secondary: "#F8FAFC", // Off White
          muted: "#CBD5E1", // Medium Gray
          dark: "#64748B", // Dark Gray
        },
        cyber: {
          navy: "#09165C",
          purple: "#7C3AED", // Purple accent
          shadow: "#0B1A68",
        },
      },
      backgroundImage: {
        // Primary Gradients - Professional Blue Variations
        "gradient-primary":
          "linear-gradient(135deg, #09165C 0%, #0B1A68 50%, #0D1F75 100%)",
        "gradient-accent":
          "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #E2E8F0 100%)",

        // Professional Purple Gradients
        "gradient-purple":
          "linear-gradient(135deg, #6B46C1 0%, #7C3AED 50%, #8B5CF6 100%)",
        "gradient-purple-light":
          "linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #A78BFA 100%)",

        // #09165C Dominant Gradients (Professional Hierarchy)
        "gradient-cyber-main":
          "linear-gradient(135deg, #09165C 0%, #0D1F75 40%, #102582 70%, #6B46C1 100%)",
        "gradient-cyber-subtle":
          "linear-gradient(135deg, #09165C 0%, #0B1A68 30%, #0D1F75 60%, #102582 100%)",
        "gradient-cyber-deep":
          "linear-gradient(135deg, #09165C 0%, #0B1A68 100%)",

        // Section-Specific Gradients with #09165C Dominance
        "gradient-hero-main":
          "linear-gradient(135deg, #09165C 0%, #0D1F75 50%, #102582 100%)",
        "gradient-services":
          "linear-gradient(135deg, #09165C 0%, #0B1A68 40%, #0D1F75 80%, #6B46C1 100%)",
        "gradient-about":
          "linear-gradient(135deg, #09165C 0%, #102582 60%, #7C3AED 100%)",
        "gradient-contact":
          "linear-gradient(135deg, #09165C 0%, #0D1F75 70%, #6B46C1 100%)",

        // CTA Gradients - #09165C Based
        "gradient-cta":
          "linear-gradient(135deg, #09165C 0%, #102582 40%, #6B46C1 100%)",
        "gradient-cta-hover":
          "linear-gradient(135deg, #0B1A68 0%, #122A8F 40%, #7C3AED 100%)",

        // Success & Status Gradients - Professional
        "gradient-success":
          "linear-gradient(135deg, #6366F1 0%, #818CF8 50%, #A5B4FC 100%)",

        // Card Gradients - #09165C Dominant
        "gradient-card-1": "linear-gradient(135deg, #09165C 0%, #0D1F75 100%)",
        "gradient-card-2": "linear-gradient(135deg, #09165C 0%, #102582 100%)",
        "gradient-card-3": "linear-gradient(135deg, #09165C 0%, #122A8F 100%)",
        "gradient-card-4": "linear-gradient(135deg, #0B1A68 0%, #6B46C1 100%)",
        "gradient-card-5": "linear-gradient(135deg, #0D1F75 0%, #7C3AED 100%)",
        "gradient-card-6": "linear-gradient(135deg, #102582 0%, #8B5CF6 100%)",

        // Glass & Overlay Gradients - #09165C Based
        "gradient-glass":
          "linear-gradient(135deg, rgba(9,22,92,0.15) 0%, rgba(11,26,104,0.05) 100%)",
        "gradient-glass-services":
          "linear-gradient(135deg, rgba(9,22,92,0.1) 0%, rgba(13,31,117,0.05) 100%)",
        "gradient-glass-about":
          "linear-gradient(135deg, rgba(9,22,92,0.12) 0%, rgba(16,37,130,0.06) 100%)",
        "gradient-glass-contact":
          "linear-gradient(135deg, rgba(9,22,92,0.08) 0%, rgba(107,70,193,0.04) 100%)",

        // Hero & Background Gradients - Enhanced
        "gradient-hero":
          "linear-gradient(180deg, #09165C 0%, #0B1A68 50%, #09165C 100%)",
        "gradient-hero-services":
          "linear-gradient(180deg, #09165C 0%, #0D1F75 50%, #09165C 100%)",
        "gradient-hero-about":
          "linear-gradient(180deg, #09165C 0%, #102582 50%, #09165C 100%)",
        "gradient-hero-contact":
          "linear-gradient(180deg, #09165C 0%, #0B1A68 30%, #6B46C1 70%, #09165C 100%)",

        // Special Professional Effects
        "gradient-cyber":
          "linear-gradient(135deg, #09165C 0%, #102582 50%, #FFFFFF 100%)",
        "gradient-professional":
          "linear-gradient(45deg, #09165C, #0D1F75, #102582, #09165C)",
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
        "glow-purple": "glow-purple 2s ease-in-out infinite alternate",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
        "spin-slow": "spin 8s linear infinite",
        "cyber-pulse": "cyber-pulse 3s ease-in-out infinite",
        "professional-shift": "professional-shift 8s ease-in-out infinite",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(255, 255, 255, 0.5)" },
          "100%": {
            boxShadow:
              "0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6)",
          },
        },
        "glow-purple": {
          "0%": {
            boxShadow:
              "0 0 10px rgba(107, 70, 193, 0.4), 0 0 20px rgba(107, 70, 193, 0.2)",
          },
          "100%": {
            boxShadow:
              "0 0 20px rgba(124, 58, 237, 0.8), 0 0 40px rgba(124, 58, 237, 0.6), 0 0 60px rgba(124, 58, 237, 0.4)",
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
        rainbow: {
          "0%": { filter: "hue-rotate(0deg)" },
          "25%": { filter: "hue-rotate(90deg)" },
          "50%": { filter: "hue-rotate(180deg)" },
          "75%": { filter: "hue-rotate(270deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
        "professional-shift": {
          "0%": {
            background: "linear-gradient(135deg, #09165C 0%, #6B46C1 100%)",
          },
          "33%": {
            background: "linear-gradient(135deg, #6B46C1 0%, #7C3AED 100%)",
          },
          "66%": {
            background: "linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)",
          },
          "100%": {
            background: "linear-gradient(135deg, #8B5CF6 0%, #09165C 100%)",
          },
        },
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 255, 255, 0.3)",
        "glow-lg": "0 0 40px rgba(255, 255, 255, 0.4)",
        "glow-xl": "0 0 60px rgba(255, 255, 255, 0.5)",
        "glow-purple": "0 0 20px rgba(107, 70, 193, 0.3)",
        "glow-purple-lg": "0 0 40px rgba(124, 58, 237, 0.4)",
        "inner-glow": "inset 0 0 20px rgba(255, 255, 255, 0.2)",
        "inner-glow-purple": "inset 0 0 20px rgba(107, 70, 193, 0.2)",
        cyber:
          "0 8px 32px rgba(9, 22, 92, 0.3), 0 4px 16px rgba(107, 70, 193, 0.1)",
        "cyber-lg":
          "0 16px 64px rgba(9, 22, 92, 0.4), 0 8px 32px rgba(124, 58, 237, 0.15)",
        "cyber-purple":
          "0 8px 32px rgba(9, 22, 92, 0.3), 0 4px 16px rgba(124, 58, 237, 0.2)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".glass-card": {
          background:
            "linear-gradient(135deg, rgba(9,22,92,0.1) 0%, rgba(107,70,193,0.05) 100%)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(107,70,193,0.2)",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(9, 22, 92, 0.3)",
        },
        ".glass-card-purple": {
          background:
            "linear-gradient(135deg, rgba(107,70,193,0.1) 0%, rgba(124,58,237,0.05) 100%)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(107,70,193,0.2)",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(107, 70, 193, 0.3)",
        },
        ".glass-card-dark": {
          background:
            "linear-gradient(135deg, rgba(13,31,117,0.8) 0%, rgba(107,70,193,0.6) 100%)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(107,70,193,0.15)",
          borderRadius: "20px",
          boxShadow: "0 12px 48px rgba(9, 22, 92, 0.4)",
        },
        ".cyber-border": {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            padding: "2px",
            background: "linear-gradient(45deg, #6B46C1, #7C3AED, #8B5CF6)",
            borderRadius: "inherit",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
          },
        },
        ".cyber-border-purple": {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            padding: "2px",
            background: "linear-gradient(45deg, #7C3AED, #8B5CF6, #A78BFA)",
            borderRadius: "inherit",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
          },
        },
        ".cyber-border-blue": {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            padding: "2px",
            background: "linear-gradient(45deg, #09165C, #102582, #6B46C1)",
            borderRadius: "inherit",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
          },
        },
        ".text-cyber-glow": {
          textShadow:
            "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)",
        },
        ".text-glow-purple": {
          textShadow:
            "0 0 10px rgba(107, 70, 193, 0.8), 0 0 20px rgba(124, 58, 237, 0.6), 0 0 30px rgba(139, 92, 246, 0.4)",
        },
        ".cyber-gradient-text": {
          background:
            "linear-gradient(135deg, #6B46C1 0%, #7C3AED 50%, #8B5CF6 100%)",
          backgroundClip: "text",
          color: "transparent",
        },
        ".cyber-gradient-text-main": {
          background:
            "linear-gradient(135deg, #09165C 0%, #6B46C1 50%, #7C3AED 100%)",
          backgroundClip: "text",
          color: "transparent",
        },
        ".cyber-gradient-text-reverse": {
          background:
            "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #09165C 100%)",
          backgroundClip: "text",
          color: "transparent",
        },
        ".cyber-card": {
          background:
            "linear-gradient(135deg, rgba(13,31,117,0.9) 0%, rgba(107,70,193,0.8) 100%)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(107,70,193,0.2)",
          borderRadius: "20px",
          boxShadow:
            "0 12px 48px rgba(9, 22, 92, 0.4), inset 0 1px 0 rgba(107,70,193,0.1)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
