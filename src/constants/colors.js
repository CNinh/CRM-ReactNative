import { colors as themeColors } from './theme';

/**
 * Colors module for backward compatibility and quick color access.
 * Extends the existing palette with the new design token system.
 */
const colors = {
  ...themeColors,
  // Backward-compatible keys preserved:
  primary: themeColors.primary,       // '#1A7FC1'
  primaryOld: '#007BFF',
  danger: themeColors.danger,         // '#EF4444'
  dangerOld: '#ff0021',
  success: themeColors.success,       // '#10B981'
  successOld: '#5cdb5c',
  warning: themeColors.warning,       // '#F59E0B'
  warningOld: '#ffc107',
  secondary: themeColors.secondary,   // '#64748B'
  secondaryOld: '#6c757d',
  white: themeColors.white,           // '#ffffff'
  black: themeColors.black,           // '#000000'
};

export default colors;
export { themeColors };
