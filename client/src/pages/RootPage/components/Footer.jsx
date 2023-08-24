import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  return (
    <footer>
      <div style={{ visibility: 'hidden' }}></div>
      <p>© kafkAlerts 2023 | MIT License</p>
      <div className='footer-links'>
        <a href='' target='_blank'>
          <FontAwesomeIcon icon='fa-brands fa-linkedin' size='2x' />
        </a>
        <a href='http://github.com/oslabs-beta/kafkalerts'>
          <FontAwesomeIcon icon='fa-brands fa-github' size='2x' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
