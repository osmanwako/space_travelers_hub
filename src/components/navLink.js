import { Route, Routes } from 'react-router-dom';
import Missions from './missions';
import MyProfile from './myProfile';
import Rockets from './rockets';

const Navigation = () => (
  <main className="app-container">

    <Routes>
      <Route path="/rockets" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/myProfile" element={<MyProfile />} />
    </Routes>
  </main>
);

export default Navigation;
