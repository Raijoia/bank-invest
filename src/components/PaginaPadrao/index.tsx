import { Outlet } from 'react-router-dom';

import NavBar from '../NavBar';

const PaginaPadrao = () => {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default PaginaPadrao;
