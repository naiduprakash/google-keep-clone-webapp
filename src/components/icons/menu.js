import * as React from 'react';
import { theme } from '@chakra-ui/react';

function MenuIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={theme.sizes[6]}
      height={theme.sizes[6]}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M 3 18 h 18 v -2 H 3 v 2 Z m 0 -5 h 18 v -2 H 3 v 2 Z m 0 -7 v 2 h 18 V 6 H 3 Z"
      />
    </svg>
  );
}

export default MenuIcon;
