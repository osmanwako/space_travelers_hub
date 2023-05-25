import { Route, Routes } from 'react-router-dom';
import Missions from './missions';
import MyProfile from './myProfile';
import Rockets from './rockets';

const Navigation = () => (
  <main className="app-container">
    <Routes>
      <Route path="/" element={<Rockets />} exact />
      <Route path="/rockets" element={<Rockets />} exact />
      <Route path="/missions" element={<Missions />} exact />
      <Route path="/myProfile" element={<MyProfile />} exact />
    </Routes>
  </main>
);

export default Navigation;
