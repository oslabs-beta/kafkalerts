import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const RootPage = () => {
  const location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    console.log('hello');
  }, []);
  return (
    <>
      {location !== '/dashboard' && <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

export default RootPage;
