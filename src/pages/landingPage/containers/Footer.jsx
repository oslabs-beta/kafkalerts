import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  return (
    <div id='footer'>
      <h2>Copyright 2023</h2>
      <div className='footer-links'>
        <a href='' target='_blank'>
          <FontAwesomeIcon icon='fa-brands fa-linkedin' size='2x' />
        </a>
        <a href='http://github.com/oslabs-beta/kafkalerts'>
          <FontAwesomeIcon icon='fa-brands fa-github' size='2x' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
