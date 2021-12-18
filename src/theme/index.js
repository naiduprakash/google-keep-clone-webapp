import { extendTheme, theme } from '@chakra-ui/react';

// black 500-900 can be fill later in the future if required
const colors = {
  brandPrimary: '#feefc3',
  brand: {
    50: '#f1f3f4',
    200: '#80868b',
    400: '#5f6368',
    600: '#2a69ac',
    800: '#3c4043',
  },
};

const fonts = {
  GoogleSans: 'Google Sans',
  ProductSans: 'Product Sans',
  Roboto: 'Roboto',
  heading: `'Google Sans',Roboto,Arial,sans-serif`,
  body: `'Google Sans',Roboto,Arial,sans-serif`,
};

const fontSizes = {
  ...theme.sizes,
  4.5: '1.125rem', //18px
  5.5: '1.375rem', //22px
  fontSizes: theme.fontSizes,
};
const styles = {
  global: (props) => ({
    'html, body,#root': {
      height: theme.sizes.full,
      padding: 0,
      margin: 0,
      color: colors.brand[400],
    },
  }),
};

const customTheme = extendTheme({ styles, colors, fonts, fontSizes });

export default customTheme;
