import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const RootPage = () => {
  return (
    <div id='wrapper'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootPage;
