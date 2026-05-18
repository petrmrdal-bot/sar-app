import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand palette — blue family for trust and clarity
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Neutral scale — slate for UI chrome and text
        neutral: {
          0: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Semantic colors — status and feedback
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        info: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Semantic type scale mapped to Tailwind defaults with tight line-heights for UI
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],   // 10px — micro labels
        xs: ['0.75rem', { lineHeight: '1rem' }],           // 12px — captions, helper text
        sm: ['0.875rem', { lineHeight: '1.25rem' }],       // 14px — body small, buttons
        base: ['1rem', { lineHeight: '1.5rem' }],          // 16px — body default
        lg: ['1.125rem', { lineHeight: '1.75rem' }],       // 18px — body large, lead
        xl: ['1.25rem', { lineHeight: '1.75rem' }],        // 20px — h6
        '2xl': ['1.5rem', { lineHeight: '2rem' }],         // 24px — h5
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],    // 30px — h4
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],      // 36px — h3
        '5xl': ['3rem', { lineHeight: '1' }],              // 48px — h2
        '6xl': ['3.75rem', { lineHeight: '1' }],           // 60px — h1
      },
      spacing: {
        // Extended spacing for denser UI patterns
        '4.5': '1.125rem',  // 18px
        '13': '3.25rem',    // 52px
        '15': '3.75rem',    // 60px
        '18': '4.5rem',     // 72px
        '22': '5.5rem',     // 88px
        '30': '7.5rem',     // 120px
      },
      borderRadius: {
        // Unified radius scale
        none: '0',
        sm: '0.125rem',     // 2px  — tight UI
        DEFAULT: '0.25rem', // 4px  — default inputs, buttons
        md: '0.375rem',     // 6px  — cards, panels
        lg: '0.5rem',       // 8px  — modals, sheets
        xl: '0.75rem',      // 12px — large cards, hero sections
        '2xl': '1rem',      // 16px — marketing containers
        full: '9999px',     // pills, avatars
      },
      boxShadow: {
        // Elevation system — subtle, purposeful depth
        none: 'none',
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        // Focus ring for accessibility — matches primary color
        ring: '0 0 0 3px rgb(59 130 246 / 0.4)',
        'ring-error': '0 0 0 3px rgb(239 68 68 / 0.4)',
      },
      transitionTimingFunction: {
        // Standardized easing curves
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(0.25rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 150ms ease-out',
        'fade-in-up': 'fade-in-up 200ms ease-out-expo',
      },
    },
  },
  plugins: [],
};

export default config;
