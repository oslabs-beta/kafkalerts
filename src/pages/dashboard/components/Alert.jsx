import React from 'react';
import { Link } from 'react-scroll';

const Alert = ({ broker }) => {
  return (
    <Link
      activeClass='active'
      smooth
      spy
      to={broker[0]}
      offset={-80}
      className='alert-box'
    >
      {broker[0]}
    </Link>
  );
};

export default Alert;
