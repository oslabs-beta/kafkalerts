import React from 'react';
import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';

const LandingPage = () => {
  return (
    <div id='landing-page' className='pages'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default LandingPage;
