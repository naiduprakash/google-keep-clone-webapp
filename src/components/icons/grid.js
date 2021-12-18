import * as React from 'react';

function GridIcon(props) {
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
          d="M3 3h7c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1zm0 10h7c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1zM14 3h7c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-7c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1zm0 10h7c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-7c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1zM9 9V5H4v4h5zm0 10v-4H4v4h5zM20 9V5h-5v4h5zm0 10v-4h-5v4h5z"
          id="a"
        />
      </defs>
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path fillOpacity={0} fill="#FFF" d="M0 0L24 0 24 24 0 24z" />
        <mask fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#a" />
      </g>
    </svg>
  );
}

export default GridIcon;
