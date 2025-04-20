interface PrimitiveColors {
  base: {
    black: '#000000';
    white: '#FFFFFF';
  };
  blue: {
    50: '#E6F1FF';
    100: '#C2DCFF';
    200: '#91C1FF';
    300: '#5EA4FF';
    400: '#2E89FF';
    500: '#006FFF';
    600: '#005ED9';
    700: '#004FB5';
    800: '#003F91';
    900: '#002F6B';
  };
  navy: {
    50: '#E6E9EE';
    100: '#C2CBD7';
    200: '#92A2B7';
    300: '#5F7796';
    400: '#2F4E76';
    500: '#012758';
    600: '#01214B';
    700: '#011C3E';
    800: '#011632';
    900: '#001025';
  };
  red: {
    50: '#FEF2F2';
    100: '#FEE2E2';
    200: '#FECACA';
    300: '#FCA5A5';
    400: '#F87171';
    500: '#EF4444';
    600: '#DC2626';
    700: '#B91C1C';
    800: '#991B1B';
    900: '#7F1D1D';
  };
  yellow: {
    50: '#FEFCE8';
    100: '#FEF9C3';
    200: '#FEF08A';
    300: '#FDE047';
    400: '#FACC15';
    500: '#EAB308';
    600: '#CA8A04';
    700: '#A16207';
    800: '#854D0E';
    900: '#713F12';
  };
  green: {
    50: '#F0FDF4';
    100: '#DCFCE7';
    200: '#BBF7D0';
    300: '#86EFAC';
    400: '#4ADE80';
    500: '#22C55E';
    600: '#16A34A';
    700: '#15803D';
    800: '#166534';
    900: '#14532D';
  };
  gray: {
    50: '#F9FAFB';
    100: '#F3F4F6';
    200: '#E5E7EB';
    300: '#D1D5DB';
    400: '#9CA3AF';
    500: '#6B7280';
    600: '#4B5563';
    700: '#374151';
    800: '#1F2937';
    900: '#030712';
  };
}
export const primitiveColors: PrimitiveColors = {
  base: {
    /** #000000 */
    black: '#000000',
    /** #FFFFFF */
    white: '#FFFFFF',
  },
  blue: {
    /** #E6F1FF */
    50: '#E6F1FF',
    /** #C2DCFF */
    100: '#C2DCFF',
    /** #91C1FF */
    200: '#91C1FF',
    /** #5EA4FF */
    300: '#5EA4FF',
    /** #2E89FF */
    400: '#2E89FF',
    /** #006FFF */
    500: '#006FFF',
    /** #005ED9 */
    600: '#005ED9',
    /** #004FB5 */
    700: '#004FB5',
    /** #003F91 */
    800: '#003F91',
    /** #002F6B */
    900: '#002F6B',
  },
  navy: {
    /** #E6E9EE */
    50: '#E6E9EE',
    /** #C2CBD7 */
    100: '#C2CBD7',
    /** #92A2B7 */
    200: '#92A2B7',
    /** #5F7796 */
    300: '#5F7796',
    /** #2F4E76 */
    400: '#2F4E76',
    /** #012758 */
    500: '#012758',
    /** #01214B */
    600: '#01214B',
    /** #011C3E */
    700: '#011C3E',
    /** #011632 */
    800: '#011632',
    /** #001025 */
    900: '#001025',
  },
  red: {
    /** #FEF2F2 */
    50: '#FEF2F2',
    /** #FEE2E2 */
    100: '#FEE2E2',
    /** #FECACA */
    200: '#FECACA',
    /** #FCA5A5 */
    300: '#FCA5A5',
    /** #F87171 */
    400: '#F87171',
    /** #EF4444 */
    500: '#EF4444',
    /** #DC2626 */
    600: '#DC2626',
    /** #B91C1C */
    700: '#B91C1C',
    /** #991B1B */
    800: '#991B1B',
    /** #7F1D1D */
    900: '#7F1D1D',
  },
  yellow: {
    /** #FEFCE8 */
    50: '#FEFCE8',
    /** #FEF9C3 */
    100: '#FEF9C3',
    /** #FEF08A */
    200: '#FEF08A',
    /** #FDE047 */
    300: '#FDE047',
    /** #FACC15 */
    400: '#FACC15',
    /** #EAB308 */
    500: '#EAB308',
    /** #CA8A04 */
    600: '#CA8A04',
    /** #A16207 */
    700: '#A16207',
    /** #854D0E */
    800: '#854D0E',
    /** #713F12 */
    900: '#713F12',
  },
  green: {
    /** #F0FDF4 */
    50: '#F0FDF4',
    /** #DCFCE7 */
    100: '#DCFCE7',
    /** #BBF7D0 */
    200: '#BBF7D0',
    /** #86EFAC */
    300: '#86EFAC',
    /** #4ADE80 */
    400: '#4ADE80',
    /** #22C55E */
    500: '#22C55E',
    /** #16A34A */
    600: '#16A34A',
    /** #15803D */
    700: '#15803D',
    /** #166534 */
    800: '#166534',
    /** #14532D */
    900: '#14532D',
  },
  gray: {
    /** #F9FAFB */
    50: '#F9FAFB',
    /** #F3F4F6 */
    100: '#F3F4F6',
    /** #E5E7EB */
    200: '#E5E7EB',
    /** #D1D5DB */
    300: '#D1D5DB',
    /** #9CA3AF */
    400: '#9CA3AF',
    /** #6B7280 */
    500: '#6B7280',
    /** #4B5563 */
    600: '#4B5563',
    /** #374151 */
    700: '#374151',
    /** #1F2937 */
    800: '#1F2937',
    /** #030712 */
    900: '#030712',
  },
};

export const sementicColors = {
  text: {
    brand: primitiveColors.blue[500],
    brand_hover_pressed: primitiveColors.blue[700],
    primary: primitiveColors.gray[900],
    primary_hover_pressed: primitiveColors.base.black,
    secondary: primitiveColors.gray[700],
    secondary_hover_pressed: primitiveColors.gray[800],
    tertiary: primitiveColors.gray[600],
    tertiary_hober_pressed: primitiveColors.gray[700],
    disabled: primitiveColors.gray[500],
    invers: primitiveColors.base.white,
    danger: primitiveColors.red[500],
    danger_hover_pressed: primitiveColors.red[700],
    info: primitiveColors.blue[500],
    info_bold: primitiveColors.blue[800],
    navy: primitiveColors.navy[500],
    navy_bold: primitiveColors.navy[800],
    warning: primitiveColors.yellow[500],
    warning_bold: primitiveColors.yellow[800],
    success: primitiveColors.green[500],
    success_bold: primitiveColors.green[800],
  },
  bg: {
    brand: primitiveColors.blue[500],
    brand_hover_pressed: primitiveColors.blue[700],
    primary: primitiveColors.gray[700],
    primary_hover_pressed: primitiveColors.gray[800],
    secondary_hover_pressed: primitiveColors.navy[700],
    tertiary: primitiveColors.gray[50],
    tertiary_hover_pressed: primitiveColors.gray[100],
    invers: primitiveColors.base.white,
    danger_subtle: primitiveColors.red[50],
    danger: primitiveColors.red[500],
    danger_hover_pressed: primitiveColors.red[700],
    info_subtle: primitiveColors.blue[50],
    info_bold: primitiveColors.blue[500],
    navy_subtle: primitiveColors.navy[50],
    navy_bold: primitiveColors.navy[500],
    warning_subtle: primitiveColors.yellow[50],
    warning_bold: primitiveColors.yellow[500],
    success_subtle: primitiveColors.green[50],
    success_bold: primitiveColors.green[500],
    disabled: primitiveColors.gray[300],
    disabled_bold: primitiveColors.gray[600],
  },
  icon: {
    brand: primitiveColors.blue[500],
    brand_hover_pressed: primitiveColors.blue[700],
    primary: primitiveColors.gray[900],
    primary_hover_pressed: primitiveColors.base.black,
    secondary: primitiveColors.gray[700],
    secondary_hover_pressed: primitiveColors.gray[800],
    tertiary: primitiveColors.gray[600],
    tertiary_hover_pressed: primitiveColors.gray[700],
    danger: primitiveColors.red[500],
    info: primitiveColors.blue[500],
    navy: primitiveColors.navy[500],
    warning: primitiveColors.yellow[500],
    success: primitiveColors.green[500],
    disabled: primitiveColors.gray[500],
    invers: primitiveColors.base.white,
  },
  border: {
    brand: primitiveColors.blue[500],
    brand_hover_pressed: primitiveColors.blue[700],
    primary: primitiveColors.gray[300],
    primary_hover_pressed: primitiveColors.gray[400],
    secondary: primitiveColors.gray[600],
    disabled: primitiveColors.gray[500],
    danger_subtle: primitiveColors.red[50],
    danger: primitiveColors.red[500],
    info_subtle: primitiveColors.blue[50],
    info: primitiveColors.blue[500],
    navy_sutle: primitiveColors.navy[50],
    navy: primitiveColors.navy[500],
    warning_subtle: primitiveColors.yellow[50],
    warning: primitiveColors.yellow[500],
    success_subtle: primitiveColors.green[50],
    success: primitiveColors.green[500],
  },
};
