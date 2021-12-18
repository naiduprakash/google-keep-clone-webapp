import * as React from 'react';

function Dragicon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 20 20"
      y="0px"
      x="0px"
      fill="#000"
      {...props}
    >
      <circle cy={5.5} cx={7.5} r={1.5} />
      <circle cy={5.5} cx={12.5} r={1.5} />
      <circle cy={10.5} cx={7.5} r={1.5} />
      <circle cy={10.5} cx={12.5} r={1.5} />
      <circle cy={15.5} cx={7.5} r={1.5} />
      <circle cy={15.5} cx={12.5} r={1.5} />
    </svg>
  );
}

export default Dragicon;
