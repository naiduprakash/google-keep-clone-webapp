import * as React from 'react';

function CheckIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <path
          d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm-2 12.2l-2.6-2.6L6 13l4 4 8-8-1.4-1.4-6.6 6.6z"
          id="a"
        />
      </defs>
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path d="M0 0L24 0 24 24 0 24z" />
        <mask fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#a" />
      </g>
    </svg>
  );
}

export default CheckIcon;
