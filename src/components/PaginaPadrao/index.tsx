import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import NavBar from '../NavBar';

const PaginaPadrao = () => {
  return (
    <div className="scroll-smooth h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PaginaPadrao;
