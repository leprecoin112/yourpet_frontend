const lightTheme = {
  breakpoints: {
    premobile: '320px',
    mobile: '480px',
    tablet: '768px',
    desktop: '1280px',
  },
  space: [0, 2, 4, 8, 16, 32, 64],
  fonts: {
    main: {
      regular: 'Manrope-Regular',
      medium: 'Manrope-Medium',
      semiBold: 'Manrope-SemiBold',
      bold: 'Manrope-Bold',
      extraBold: 'Manrope-ExtraBold',
    },
    secondary: { regular: 'Inter-Regular', medium: 'Inter-Medium' },
  },
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '28px', '48px', '68px'],
  colors: {
    background: '#FEF9F9',
    yellow: '#FFC107',
    white: '#FFFFFF',
    light: '#FEF9F9',
    black: '#111111',
    blue: '#54ADFF',
    lightBlue: '#CCE4FB',
    green: '#00C3AD',
    red: '#F43F5E',
    gray: '#888888',
    gradientBlue: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)',
    backdrop: 'rgba(87, 86, 86, 0.6)',
  },
  boxShadows: {
    main: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    secondary: '7px 13px 14px rgba(116, 177, 232, 0.24)',
    filter: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  transition: { main: 'cubic-bezier(0.4, 0, 0.2, 1)' },
  duration: { main: '250ms' },
  bg: { main: '#FEF9F9' },
};

export default lightTheme;
