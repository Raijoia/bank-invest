import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import PaginaPadrao from './components/PaginaPadrao';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
