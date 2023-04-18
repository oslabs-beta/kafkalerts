import React, { useRef } from 'react';
import { useLink } from 'react-aria';

const Link = (props) => {
  let ref = useRef(null);
  let { linkProps, isPressed } = useLink(
    { ...props, elementType: 'span' },
    ref
  );

  return (
    <span
      {...linkProps}
      ref={ref}
      style={{
        color: isPressed ? 'darkgrey' : 'black',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      {props.children}
    </span>
  );
};
export default Link;
