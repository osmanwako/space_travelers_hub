import { Route, Routes } from 'react-router-dom';
import Rockets from './rockets';

const NavLink = () => (
  <main className="app-container">
    <Routes>
      <Route path="/" element={<Rockets />} exact />
      <Route path="/rockets" element={<Rockets />} exact />
    </Routes>
  </main>
);
export default NavLink;
