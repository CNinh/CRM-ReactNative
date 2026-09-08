/**
 * Design Token System for CRM Mobile App
 * Comprehensive tokens for colors, typography, spacing, border radiuses, shadows, and gradients.
 */
import { Platform } from 'react-native';

export const colors = {
  // Brand Colors
  primary: '#1A7FC1',          // Core Blue
  primaryDark: '#105996',      // Darker blue for active states & header gradient start
  primaryLight: '#4AA0DF',     // Lighter blue for header accent & highlights
  primarySubtle: '#EBF5FC',    // 8% blue tint for badges, tags, active item backgrounds
  primaryBorder: '#BDE0FE',    // Subtle blue border for active states

  // Secondary & Accents
  secondary: '#64748B',
  secondaryLight: '#F1F5F9',
  accent: '#0284C7',
  accentLight: '#E0F2FE',

  // Semantic Status Colors
  success: '#10B981',          // Emerald Green
  successLight: '#DCFCE7',
  successDark: '#15803D',
  successBorder: '#86EFAC',

  warning: '#F59E0B',          // Amber Warning
  warningLight: '#FEF3C7',
  warningDark: '#B45309',
  warningBorder: '#FCD34D',

  danger: '#EF4444',           // Red Danger
  dangerLight: '#FEE2E2',
  dangerDark: '#B91C1C',
  dangerBorder: '#FCA5A5',

  info: '#0EA5E9',             // Sky Info
  infoLight: '#E0F2FE',
  infoDark: '#0369A1',
  infoBorder: '#7DD3FC',

  // Neutral Scale (Slate-based for modern, crisp contrast)
  white: '#FFFFFF',
  gray50: '#F8FAFC',           // Main app background
  gray100: '#F1F5F9',          // Sub-surface, input background
  gray200: '#E2E8F0',          // Standard dividers & borders
  gray300: '#CBD5E1',          // Subtle borders, inactive icons
  gray400: '#94A3B8',          // Placeholder text, disabled items
  gray500: '#64748B',          // Secondary labels, captions
  gray600: '#475569',          // Body text, secondary headings
  gray700: '#334155',          // Subtitles, strong body text
  gray800: '#1E293B',          // Section titles, primary text
  gray900: '#0F172A',          // Heavy titles, deepest contrast
  black: '#000000',

  // Surface & Layout
  background: '#F8FAFC',
  surface: '#FFFFFF',
  surfaceCard: '#FFFFFF',
  surfaceElevated: '#FFFFFF',
  border: '#E2E8F0',
  borderLight: '#F1F5F9',
  divider: '#EDF2F7',
  backdrop: 'rgba(15, 23, 42, 0.5)',

  // Business Specific Colors (Stages & Categories)
  stages: {
    prospect: '#3B82F6',       // Giai đoạn: Tìm hiểu / Tiềm năng (Blue)
    qualification: '#06B6D4',  // Giai đoạn: Đánh giá (Cyan)
    proposal: '#F59E0B',       // Giai đoạn: Báo giá / Đề xuất (Amber)
    negotiation: '#8B5CF6',    // Giai đoạn: Đàm phán (Purple)
    won: '#10B981',            // Giai đoạn: Thành công / Ký HĐ (Green)
    lost: '#EF4444',           // Giai đoạn: Thất bại (Red)
    suspended: '#64748B',      // Giai đoạn: Tạm hoãn (Slate)
  },

  // KPI Card Theme Colors
  kpi: {
    blue: {
      accent: '#1A7FC1',
      background: '#F0F7FD',
      border: '#BAE6FD',
      iconBg: '#E0F2FE',
    },
    green: {
      accent: '#10B981',
      background: '#F0FDF4',
      border: '#BBF7D0',
      iconBg: '#DCFCE7',
    },
    purple: {
      accent: '#8B5CF6',
      background: '#F5F3FF',
      border: '#DDD6FE',
      iconBg: '#EDE9FE',
    },
    amber: {
      accent: '#F59E0B',
      background: '#FFFBEB',
      border: '#FDE68A',
      iconBg: '#FEF3C7',
    },
  },

  // Gradients (for react-native-linear-gradient or gradient styling)
  gradients: {
    primary: ['#105996', '#1A7FC1', '#4AA0DF'],
    header: ['#105996', '#1A7FC1', '#4AA0DF'],
    primaryButton: ['#1565C0', '#1E88E5', '#42A5F5'],
    success: ['#059669', '#10B981'],
    warning: ['#D97706', '#F59E0B'],
    danger: ['#DC2626', '#EF4444'],
    cardOverlay: ['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.4)'],
    shimmer: ['#F1F5F9', '#E2E8F0', '#F1F5F9'],
  },
};

export const typography = {
  // Font Sizes
  size: {
    xxs: 10,
    xs: 11,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 20,
    h3: 22,
    h2: 24,
    h1: 28,
    display: 32,
  },

  // Font Weights (as string for React Native cross-platform compatibility)
  weight: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    heavy: '800',
  },

  // Line Heights
  lineHeight: {
    xs: 14,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 26,
    xxl: 28,
    h3: 30,
    h2: 32,
    h1: 36,
  },

  // Predefined Typography Presets
  h1: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
    color: colors.gray900,
  },
  h2: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 28,
    color: colors.gray900,
  },
  h3: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: colors.gray900,
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: colors.gray800,
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: colors.gray800,
  },
  body1: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
    color: colors.gray700,
  },
  body2: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    color: colors.gray600,
  },
  caption: {
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 15,
    color: colors.gray500,
  },
  overline: {
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 14,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: colors.gray500,
  },
};

export const spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
};

export const radius = {
  none: 0,
  xs: 4,
  sm: 6,
  md: 10,
  lg: 14,
  xl: 18,
  xxl: 24,
  full: 9999,
};

export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  xs: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  sm: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
  xl: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.16,
    shadowRadius: 24,
    elevation: 12,
  },
  // Colored Glow / Primary Shadow for prominent CTA buttons and active elements
  primaryGlow: {
    shadowColor: '#1A7FC1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.28,
    shadowRadius: 8,
    elevation: 5,
  },
};

export const zIndex = {
  base: 0,
  card: 1,
  dropdown: 100,
  header: 500,
  modal: 1000,
  toast: 2000,
};

const theme = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  zIndex,
};

export default theme;
