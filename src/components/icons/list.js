import * as React from 'react';

function ListIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path fillOpacity={0} fill="#FFF" d="M0 0L24 0 24 24 0 24z" />
        <path
          d="M20 9H4V5h16v4zm0 10H4v-4h16v4zM3 3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H3zm0 10c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H3z"
          fill="#000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default ListIcon;
