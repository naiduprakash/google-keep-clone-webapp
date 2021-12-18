import { extendTheme } from '@chakra-ui/react';

// black 500-900 can be fill later in the future if required
const colors = {
  brandPrimary: '#feefc3',
  black: {
    50: '#f1f3f4',
    100: '#80868b',
    200: '#5f6368',
    300: '#2a69ac',
    400: '#3c4043',
  },
};

const fonts = {
  GoogleSans: 'Google Sans',
  ProductSans: 'Product Sans',
  Roboto: 'Roboto',
  heading: `'Google Sans',Roboto,Arial,sans-serif`,
  body: `'Google Sans',Roboto,Arial,sans-serif`,
};

const theme = extendTheme({ colors, fonts });

export default theme;
