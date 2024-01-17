import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import PaginaPadrao from './components/PaginaPadrao';

import About from './pages/About';
import Home from './pages/Home';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
