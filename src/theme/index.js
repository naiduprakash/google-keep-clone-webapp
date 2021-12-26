import { extendTheme, theme } from '@chakra-ui/react';
import { extendsColorOpacity } from './utils';
// black 500-900 can be fill later in the future if required
const colors = {
  brandPrimary: '#feefc3',
  brand: {
    50: '#f1f3f4',
    100: '#dfdfdf',
    150: '#e0e0e0',
    200: '#80868b',
    400: '#5f6368',
    600: '#2a69ac',
    800: '#3c4043',
    850: '#202124',
  },
};

let updatedColorVariants = extendsColorOpacity({ ...theme.colors, ...colors });

const fonts = {
  GoogleSans: 'Google Sans',
  ProductSans: 'Product Sans',
  Roboto: 'Roboto',
  heading: `'Google Sans',Roboto,Arial,sans-serif`,
  body: `'Google Sans',Roboto,Arial,sans-serif`,
};

const fontSizes = {
  // ...theme.sizes,
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

const config = { useSystemColorMode: false, initialColorMode: 'light', cssVarPrefix: 'pn' };

const customTheme = extendTheme({ config, styles, colors: updatedColorVariants, fonts, fontSizes });
console.log('theme', theme);
export default customTheme;
