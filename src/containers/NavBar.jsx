import React, { useRef } from 'react';
import { useLink } from 'react-aria';

const Linwk = (props) => {
  let ref = useRef(null);
  let { linkProps } = useLink(props, ref);

  return (
    <a
      {...linkProps}
      ref={ref}
      href={props.href}
      target={props.target}
      style={{ color: 'var(--blue)' }}
    >
      {props.children}
    </a>
  );
};

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
        color: isPressed
          ? 'var(--blue)'
          : 'var(--spectrum-global-color-blue-700)',
        textDecoration: 'underline',
        cursor: 'pointer',
      }}
    >
      {props.children}
    </span>
  );
};

<Link onPress={() => alert('Pressed link')}>Adobe</Link>;

const Navbar = ({ username }) => {
  return (
    <div id='navbar-container'>
      <button>Home</button>
      <h1>kafkAlerts</h1>
      <div>
        <p>{username}</p>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
