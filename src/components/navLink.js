import { Route, Routes } from 'react-router-dom';
import Rockets from './rockets';
import Missions from './missions';
import NotFound from './notFound';
import MyProfile from './myProfile';

const NavLink = () => (
  <main className="app-container">
    <Routes>
      <Route path="/" element={<Rockets />} exact />
      <Route path="/rockets" element={<Rockets />} exact />
      <Route path="/missions" element={<Missions />} exact />
      <Route path="/myprofiles" element={<MyProfile />} exact />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);
export default NavLink;
